import  { fi2PartnerFixture }  from '../__fixtures__/fi2partner.fixture'
import axios from 'axios'
import { client } from '../index'

jest.mock('axios', () => ({
  create: jest.fn()
}))

describe('#fastapiadapter', () => {

  let xmlClientMock

  beforeEach(() => {
    //console.log = jest.fn()
    console.error = jest.fn()
  
    xmlClientMock = {
      get: jest.fn().mockResolvedValueOnce({ data: fi2PartnerFixture })
    }
    ;(axios.create as jest.Mock).mockReturnValue(xmlClientMock)
  })

  describe('#get', () => {
    test('gets xml and returns json', async () => {
      
      const result = await client.get('an url')

      expect(xmlClientMock.get).toHaveBeenCalledTimes(1)
      expect(result).toHaveProperty('fi2simplemessage')
      expect(result).toHaveProperty('fi2simplemessage.fi2messageheader')
      expect(result).toHaveProperty('fi2simplemessage.fi2partner')
    })
  })

})