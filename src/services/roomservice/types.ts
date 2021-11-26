import {
  Fi2Address,
  Address,
  Fi2Value,
  Fi2Class,
  Fi2ParentObject,
  Fi2Document,
  Fi2Ids,
  Fi2ValueUsage,
} from '@app/commonTypes/types'

export interface Room {
  id: string
  name: string
  description: string
  shared: boolean
}

export interface Fi2Space {
  id: string
  fi2space_name: Fi2ValueUsage
  fi2space_descr: Fi2ValueUsage
  guid?: string
  fi2space_common?: boolean
  fi2space_height?: number
  fi2space_perimeter?: number
}

export interface Fi2SpaceResponse {
  fi2simplemessage?: {
    fi2space: Fi2Space[]
  }
}
