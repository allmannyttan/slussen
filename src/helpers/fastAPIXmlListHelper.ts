import { paths } from '@app/config'
import { Fi2ClassNode, Fi2ClassListXml, Fi2ValueNode, ListItem, Validationlist } from './types'
import fs from 'fs'
import xml2json from 'xml2json'

export const findCodeInListItems = (code: string, listItems: ListItem[]): ListItem | void => {
  let item: ListItem | void

  for (let index = 0; index < listItems.length; index++) {
    const element = listItems[index]
    if (element['item-value'] === code) {
      item = element
      break
    } else if (Array.isArray(element['list-item'])) {
      item = element['list-item'].find((e) => e['item-value'] === code)
      if (item) break
    }
  }

  return item
}

const getNameFromlist = (code: string, listFile: string): string => {
  if (!fs.existsSync(listFile)) {
    throw new Error(`List file missing: ${listFile}`)
  }

  const xml = fs.readFileSync(listFile, { encoding: 'utf8' })

  if (!code || !xml) return ''

  const json: Fi2ClassListXml = JSON.parse(xml2json.toJson(xml))

  if (json.document.validationlist) {
    const item = findCodeInListItems(code, json.document.validationlist['list-item'])

    return item && item['item-description'] ? item['item-description'] : ''
  }

  return ''
}

export const getNameFromClasslist = (node: Fi2ClassNode): string => {
  if (!node.fi2class_code) return '' //Silently return empty string or throw error?

  const code = node.fi2class_code

  return getNameFromlist(code, `${paths.classlists}${node.fi2class_scheme.fi2scheme_id}.xml`)
}

export const getNameFromValuelist = (node: Fi2ValueNode): string => {
  if (!node.fi2value_code) return '' //Silently return empty string or throw error?

  const code = node.fi2value_code

  return getNameFromlist(code, `${paths.valuelists}${node.fi2value_scheme.fi2scheme_id}.xml`)
}

export default {
  findCodeInListItems,
  getNameFromClasslist,
  getNameFromValuelist,
}
