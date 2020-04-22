import { client } from '../index'
import { fi2PartnerFixture } from '../__fixtures__/fi2partner.fixture'
import axios from 'axios'
import xml2json from 'xml2json'

jest.mock('axios', () => ({
  create: jest.fn(),
}))
jest.mock('xml2json')

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
  })

  describe('#get', () => {
    test('gets xml and returns json from xml2json', async () => {
      const result = await client.get('an url')

      expect(xmlClientMock.get).toHaveBeenCalledTimes(1)
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
})
