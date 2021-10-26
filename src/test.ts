import { DOMParser } from '@xmldom/xmldom'
const { client } = require('@app/adapters/fastapiadapter')
import Schema, { Type, string, number, array } from 'computed-types';
import type { StatusType } from '@app/services/caseservice/types'

function getDoc(xml: string) {
  return new DOMParser().parseFromString(xml, "application/xml")
}

type XMLDoc = ReturnType<typeof getDoc>

function getElementInPath(xmlDoc: XMLDoc, path: string) {
  return path.split(".").reduce(
    (acc: Element, next) => {
      const match = acc.getElementsByTagName(next)
      if (!match || !match[0]) throw new Error("Couldn't find that thing")
      return match[0]
    },
    xmlDoc.documentElement
  )
}

function setTextContent(xmlDoc: XMLDoc, path: string, newValue: string) {
  getElementInPath(xmlDoc, path).textContent = newValue
}

const updaters: Record<string, (d: Document, s: string) => void> = {
  status: (doc: Document, value: string) => setTextContent(doc, "fi2case_status.fi2class_code", value)
}

const input: Record<string, any> = {
  status: "Annul"
}

const InputSchema = Schema({
  status: Schema.enum(StatusType, "Invalid value for status"),
 })
 const validate = InputSchema.destruct()

async function doIt(id = "CASE-1") {
  try {
    const caseData = await client.get({
      url: `fi2case/${id}`,
      skipXmlSerialization: true
    })
    
    const doc = getDoc(caseData)
    // @ts-ignore 
    const [err, payload] = validate(input)
    if (err || !payload) throw err
    console.log(payload)
    for (const item of Object.entries(payload)) {
      const [key, value] = item
      console.log(key, updaters[key])
      if (updaters[key]) updaters[key](doc, value)
    }

    const response2 = await client.put({
      url: `fi2case/${id}`,
      skipXmlSerialization: true
    }, doc.toString())

    const doc2 = getDoc(response2)
    const status = getElementInPath(doc2, "fi2case_status.fi2class_code")
    console.log(status.toString())
    // console.log("------------------------------------")
    // console.log(JSON.stringify(response, null, 2))
  } catch (err) {
    console.log(err)
  }
}

doIt()