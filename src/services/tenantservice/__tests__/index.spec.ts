import  { fi2PartnerJson }  from '../__fixtures__/fastAPIAdapterResult.fixture'
import { client } from '../../../adapters/fastapiadapter'
import service from '../index'
//import helper from '@app/helpers/fastAPIXmlListHelper'


jest.mock('../../../adapters/fastapiadapter')


describe('#tenantservice', () => {

  beforeEach(() => {
    //console.log = jest.fn()
    console.error = jest.fn()
  
    jest.resetAllMocks()
  })

  describe('#getTenants', () => {
    test('uses fast api adapter to get tenants', async () => {
      ;(client.get as jest.Mock).mockResolvedValueOnce(fi2PartnerJson)
      
      await service.getTenants()

      expect(client.get).toHaveBeenCalledTimes(1)
    })
  })

  // describe('#transformTenant', () => {
  //   test('uses helper to get partner class', async () => {
  //     console.log(fi2PartnerFixture)
  //     ;(client.get as jest.Mock).mockResolvedValueOnce(fi2PartnerFixture)
      
  //     await service.transformTenant({
  //       fi2part_class: [
  //         {
  //           "fi2class_code": [
  //             "16"
  //           ],
  //           "fi2class_scheme": [
  //             {
  //               "fi2scheme_id": [
  //                 "CA000_005_003"
  //               ],
  //               "fi2scheme_name": [
  //                 "Klassificering FI2Partner"
  //               ],
  //               "fi2scheme_url": [
  //                 "http://www.fi2.se/classlist/CA000_005_003.xml"
  //               ]
  //             }
  //           ]
  //         }, 
  //       ]
  //     })

  //     expect(helper.getNameFromClasslist).toHaveBeenCalledTimes(1)
  //   })
  // })
})