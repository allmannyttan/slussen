import { client } from '../index'
import { fi2PartnerFixture } from '../__fixtures__/fi2partner.fixture'
import axios from 'axios'
import xml2json from 'xml2json'
import config from '../../../config'

jest.mock('axios', () => ({
  create: jest.fn(),
}))
jest.mock('xml2json')
jest.mock('../../../config')
jest.mock('../tokenHelper', () => ({
  tokenRefresher: (innerGet) => {
    return (arg) => {
      arg.token = 'a test token'
      return innerGet(arg)
    }
  },
}))

describe('#fastapiadapter', () => {
  let xmlClientMock
  const jsonResult = '{"prop": "value"}'

  beforeEach(() => {
    //console.log = jest.fn()
    console.error = jest.fn()

    xmlClientMock = {
      get: jest.fn().mockResolvedValueOnce({ data: fi2PartnerFixture }),
    }
    ;(axios.create as jest.Mock).mockReturnValue(xmlClientMock)

    xml2json.toJson = jest.fn().mockReturnValue(jsonResult)

    config.fastAPI = {
      baseUrl: 'test',
      user: 'user',
      password: 'pwd',
    }
  })

  describe('#get', () => {
    test('gets xml and returns json from xml2json', async () => {
      const result = await client.get({ url: 'an url' })
      expect(xml2json.toJson).toHaveBeenCalledWith(fi2PartnerFixture, {
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
        ],
      })
      expect(result).toEqual(JSON.parse(jsonResult))
    })
  })

  test('calls the correct url', async () => {
    await client.get({ url: 'an url' })

    expect(xmlClientMock.get).toHaveBeenCalledTimes(1)
    expect(xmlClientMock.get).toHaveBeenCalledWith('an url')
  })

  test('uses token from tokenRefresher in header', async () => {
    await client.get({ url: 'an url' })

    expect(axios.create).toHaveBeenCalledWith({
      baseURL: 'http://www.fastapi.se/backendprop/v1/api/',
      headers: {
        Accept: '*/*',
        'Access-Token': 'a test token',
      },
      responseType: 'text',
    })
  })
})
