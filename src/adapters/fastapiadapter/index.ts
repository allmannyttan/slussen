import xml2json, { toXml } from 'xml2json'
import axios, { AxiosError } from 'axios'
import { fastAPI } from '@app/config'
import { tokenRefresher } from './tokenHelper'
import { FastAPIRequest } from './types'
import { CaseRequest } from '@app/services/caseservice/types'

const initXmlClient = (request: FastAPIRequest) =>  {
  const headers = {
    'Access-Token': request.token || '',
    Accept: '*/*',
    'Content-Type': 'application/xml, charset=utf-8',
  }
  return axios.create({
    headers,
    baseURL: fastAPI.baseUrl,
    responseType: 'text',
  })
}

const serializeXmlResponse = (data: string) =>
  JSON.parse(
    xml2json.toJson(data, {
      arrayNotation: [
        'fi2lease_actor',
        'fi2lease_documents',
        'fi2lease_value',
        'fi2addr_addrline',
        'fi2addr_tel',
        'fi2part_tel',
        'fi2part_email',
        'fi2part_address',
        'fi2part_value',
        'fi2_id',
        'fi2cont_tel',
        'fi2cont_email',
        'fi2spsys_area',
        'fi2spsys_address',
        'fi2spsys_value'
      ],
    })
    )
    
  const getXmlPostBody = (title: string, description: string, category: string): string => xml2json.toXml(JSON.parse(`
  {
    "fi2case": {
      "xmlns": "http://www.fi2.se/schemas/1.31",
      "fi2case_descr": [
          {
            "lang": "sv",
            "usage": "Description",
            "$t": "${title}"
          },
          {
            "lang": "sv",
            "usage": "Comment",
            "$t": "${description}"
          }
      ],
      "fi2case_category": {
        "fi2class_code": "Case",
        "fi2class_scheme": {
          "fi2scheme_id": "Class_Fi2CaseCategoryType_01",
          "fi2scheme_name": "${category}",
          "fi2scheme_url": "http://www.fastapi.se/lists/classlist/Class_Fi2CaseCategoryType_01.xml"
        }
      }
    }
  }`));

const innerGet = async <T = any>(request: FastAPIRequest) => {

  const xmlClient = initXmlClient(request)

  const { data } = await xmlClient.get(request.url)

  const result = serializeXmlResponse(data)
  return result
}

const innerPost = async <T = any>(request: FastAPIRequest) => {

  const xmlClient = initXmlClient(request)
  const {title, description, category} = <CaseRequest>request.body;  

  const xml = getXmlPostBody(title, description, category)

  // const data = await xmlClient
  //  .post(request.url, xml)

  try {
    const { data } = await xmlClient.post(request.url, xml)
    return serializeXmlResponse(data)
  } catch (error) {
    const { response } = <AxiosError>error
    return serializeXmlResponse(response?.data)
  }

  /*
  axios.post(url, data).then(res => {
        // do good things
  })
  .catch(err => {
      if (err.response) {
        // client received an error response (5xx, 4xx)
      } else if (err.request) {
        // client never received a response, or request never left
      } else {
        // anything else
      }
  })
  */


  // const data = xmlClient
  //   .post(request.url, xml)
  //   .then(response => response)
  //   .then(({data}) => serializeXmlResponse(data))
  //   .catch((error) => {
  //     console.log(error)
  //   })

    // .then(({data})=> serializeXmlResponse(data) )

    // const result = serializeXmlResponse(data)

  // return data
}



export const client = {
  get: tokenRefresher(innerGet),
  post: tokenRefresher(innerPost)
}

export default {
  client,
}
