/* eslint-disable @typescript-eslint/camelcase */
import xml2json from 'xml2json'

import { Fi2Case, CaseCreateRequest, CaseUpdateRequest } from './types'
type Input = CaseCreateRequest | CaseUpdateRequest

export function makeDescriptionExtractor(from: Fi2Case): (usage: string) => string {
  // bug(?) in fastapi: fi2case_descr is not an array if there's only one "field" in there
  const descr = Array.isArray(from.fi2case_descr)
    ? from.fi2case_descr
    : from.fi2case_descr
    ? [from.fi2case_descr]
    : []

  return (usage: string) => descr.find((d) => d.usage === usage)?.$t || ''
}

function makeDescription({ description, comment }: { description: string; comment: string }) {
  return [
    {
      lang: 'sv',
      usage: 'Description',
      $t: description,
    },
    {
      lang: 'sv',
      usage: 'Comment',
      $t: comment,
    },
  ]
}

function makeParentObject(input: CaseCreateRequest) {
  return {
    fi2item: 'fi2spatisystem',
    fi2parent_ids: [{ fi2_id: { $t: input.rentalId } }],
  }
}

function findValue(match: string) {
  return (data: Fi2Case) => data.fi2case_value.find((part) => part.fi2value_code === match)
}

function findValueOrRaise(match: string) {
  const finder = findValue(match)
  return (data: Fi2Case) => {
    const val = finder(data)
    if (!val) throw new Error(`Fi2Case has no ${match} value`)
    return val
  }
}

const findETag = findValueOrRaise('ETag')
const findCreatedDate = findValueOrRaise('CreatedDate')
const findCreatedBy = findValueOrRaise('CreatedBy')
const findChangedDate = findValueOrRaise('ChangedDate')
const findChangedBy = findValueOrRaise('ChangedBy')

export function updatePayload(caseRemote: Fi2Case, caseUpdate: CaseUpdateRequest) {
  const extract = makeDescriptionExtractor(caseRemote)
  const description = makeDescription({
    comment: caseUpdate.comment || extract('Comment'),
    description: caseUpdate.description || extract('Description'),
  })

  const values = [
    findChangedBy,
    findChangedDate,
    findCreatedBy,
    findCreatedDate,
    findETag,
  ].map((v) => v(caseRemote))

  const registrationDate = caseRemote.fi2case_registrationdate
    ? { fi2case_registrationdate: { $t: caseRemote.fi2case_registrationdate } }
    : {}

  return {
    id: caseRemote.id,
    fi2case_ids: [{ fi2_id: { usage: 'CaseNumber' } }],
    fi2case_value: values.map((value) => ({
      fi2value_code: { $t: value.fi2value_code },
      fi2value_scheme: {
        fi2scheme_id: { $t: value.fi2value_scheme.fi2scheme_id },
        fi2scheme_name: { $t: value.fi2value_scheme.fi2scheme_name },
        fi2scheme_url: { $t: value.fi2value_scheme.fi2scheme_url },
      },
      fi2value_value: { $t: value.fi2value_value },
    })),
    fi2case_descr: description,
    ...registrationDate,
    fi2case_category: {
      fi2class_code: { $t: 'Case' },
      fi2class_scheme: {
        fi2scheme_id: { $t: 'Class_Fi2CaseCategoryType_01' },
        fi2scheme_name: { $t: 'Ärendetyp Felanmälningar' },
        fi2scheme_url: {
          $t: 'http://www.fastapi.se/lists/classlist/Class_Fi2CaseCategoryType_01.xml',
        },
      },
    },
    fi2case_status: {
      fi2class_code: { $t: caseRemote.fi2case_status.fi2class_code },
      fi2class_scheme: {
        fi2scheme_id: { $t: 'Class_Fi2CaseStatus_01' },
        fi2scheme_name: { $t: 'Status Felanmälningar' },
        fi2scheme_url: { $t: 'http://www.fastapi.se/lists/classlist/Class_Fi2CaseStatus_01.xml' },
      },
    },
    fi2case_parentobject: {
      fi2item: 'fi2spatisystem',
      fi2parent_ids: [{ fi2_id: { $t: 'OBJ-11020301' } }],
    },
  }
}

export const createPayload = (caseItem: CaseCreateRequest): {} => {
  const description = makeDescription({
    description: caseItem.description,
    comment: caseItem.comment || '',
  })
  const parentObject = makeParentObject(caseItem)

  return {
    fi2case_descr: description,
    fi2case_category: {
      fi2class_code: { $t: 'Case' },
      fi2class_scheme: {
        fi2scheme_id: { $t: 'Class_Fi2CaseCategoryType_01' },
        fi2scheme_name: { $t: 'Ärendetyp Felanmälningar' },
        fi2scheme_url: {
          $t: 'http://www.fastapi.se/lists/classlist/Class_Fi2CaseCategoryType_01.xml',
        },
      },
    },
    fi2case_status: {
      fi2class_code: { $t: 'Pending' },
      fi2class_scheme: {
        fi2scheme_id: { $t: 'Class_Fi2CaseStatus_01' },
        fi2scheme_name: { $t: 'Status Felanmälningar' },
        fi2scheme_url: { $t: 'http://www.fastapi.se/lists/classlist/Class_Fi2CaseStatus_01.xml' },
      },
    },
    fi2case_parentobject: parentObject,
  }
}

export const convertPayload = (
  payload: ReturnType<typeof createPayload | typeof updatePayload>
): string => {
  return xml2json.toXml({
    fi2case: {
      xmlns: 'http://www.fi2.se/schemas/1.31',
      ...payload,
    },
  })
}
