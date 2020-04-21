import { paths } from '@app/config'
import { Fi2ClassNode, Fi2ClassListXml, Fi2ValueNode, ListItem } from './types'
import fs from 'fs'
import xml2js from 'xml2js'

export const findCodeInListItems = (code: string, listItems: ListItem[]): ListItem | void => {
  let item: ListItem | void

  for (let index = 0; index < listItems.length; index++) {
    const element = listItems[index]
    if (element['item-value'][0] === code) {
      item = element
      break
    } else if (Array.isArray(element['list-item'])) {
      item = element['list-item'].find((e) => e['item-value'][0] === code)
      if (item) break
    }
  }

  return item
}

const getNameFromlist = async (code: string, listFile: string): Promise<string> => {
  if (!fs.existsSync(listFile)) {
    throw new Error(`List file missing: ${listFile}`)
  }

  const xml = fs.readFileSync(listFile, { encoding: 'utf8' })

  if (!code || !xml) return ''

  const json: Fi2ClassListXml = await xml2js.parseStringPromise(xml)

  if (json.document.validationlist) {
    const item = findCodeInListItems(code, json.document.validationlist[0]['list-item'])

    return item && item['item-description'] && Array.isArray(item['item-description'])
      ? item['item-description'][0]
      : ''
  }

  return ''
}

export const getNameFromClasslist = async (node: Fi2ClassNode): Promise<string> => {
  if (!node.fi2class_code) return '' //Silently return empty string or throw error?

  const code = node.fi2class_code[0]

  return getNameFromlist(code, `${paths.classlists}${node.fi2class_scheme[0].fi2scheme_id}.xml`)
}

export const getNameFromValuelist = async (node: Fi2ValueNode): Promise<string> => {
  if (!node.fi2value_code) return '' //Silently return empty string or throw error?

  const code = node.fi2value_code[0]

  return getNameFromlist(code, `${paths.valuelists}${node.fi2value_scheme[0].fi2scheme_id}.xml`)
}

export default {
  findCodeInListItems,
  getNameFromClasslist,
  getNameFromValuelist,
}
