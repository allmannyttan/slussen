import { Fi2ClassNode, Fi2ClassListXml } from './types'
import fs from 'fs'
import xml2js from 'xml2js'

export const getNameFromClasslist = async (node: Fi2ClassNode) => {
  if (!node.fi2class_code) return '' //Silently return empty string or throw error?

  const code = node.fi2class_code[0]

  const xml = fs.readFileSync(
    `src/fastAPIXml/classlists/${node.fi2class_scheme[0].fi2scheme_id}.xml`,
    { encoding: 'utf8' }
  )

  if (!code || !xml) return ''

  const json: Fi2ClassListXml = await xml2js.parseStringPromise(xml)

  if (json.document.validationlist) {
    const item = json.document.validationlist[0]['list-item'].find(
      (element) => element['item-value'][0] === code
    )

    return item &&
      item['item-description'] &&
      Array.isArray(item['item-description'])
      ? item['item-description'][0]
      : ''
  }

  return ''
}

export default {
  getNameFromClasslist,
}
