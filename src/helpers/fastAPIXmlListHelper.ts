import { paths } from '@app/config'
import { Fi2ClassNode, Fi2ClassListXml, Fi2ValueNode } from './types'
import fs from 'fs'
import xml2js from 'xml2js'

const getNameFromlist = async (
  code: string,
  listFile: string
): Promise<string> => {
  const xml = fs.readFileSync(listFile, { encoding: 'utf8' })

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

export const getNameFromClasslist = async (
  node: Fi2ClassNode
): Promise<string> => {
  if (!node.fi2class_code) return '' //Silently return empty string or throw error?

  const code = node.fi2class_code[0]

  return getNameFromlist(
    code,
    `${paths.classlists}${node.fi2class_scheme[0].fi2scheme_id}.xml`
  )
}

export const getNameFromValuelist = async (
  node: Fi2ValueNode
): Promise<string> => {
  if (!node.fi2value_code) return '' //Silently return empty string or throw error?

  const code = node.fi2value_code[0]

  return getNameFromlist(
    code,
    `${paths.valuelists}${node.fi2value_scheme[0].fi2scheme_id}.xml`
  )
}

export default {
  getNameFromClasslist,
  getNameFromValuelist,
}
