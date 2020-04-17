import { fi2PartnerJson } from '../__fixtures__/fastAPIAdapterResult.fixture'
import { client } from '@app/adapters/fastapiadapter'
import service from '../index'

jest.mock('@app/adapters/fastapiadapter')

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

    test('returns tenants in correct format', async () => {
      ;(client.get as jest.Mock).mockResolvedValueOnce(fi2PartnerJson)

      const result = await service.getTenants()

      expect(result).toMatchInlineSnapshot(`
        Array [
          Object {
            "addresses": Array [
              Object {
                "attention": "836",
                "box": "798",
                "city": "Askersund",
                "co": "",
                "country": "SE",
                "guid": "DECE1A01-9ADA-495C-9341-426A198F61F4",
                "street": "Norravägen 277",
                "type": "Home Address",
                "zipCode": "79111",
              },
              Object {
                "attention": "289",
                "box": "222",
                "city": "Yrboda",
                "co": "",
                "country": "SE",
                "guid": "AEB1A38F-A0BB-4132-A1A0-E7998A09C37D",
                "street": "Exempelgatan 234",
                "type": "Postal Address",
                "zipCode": "22233",
              },
            ],
            "changeDate": "2015-11-18T09:21:06",
            "changedBy": "Script",
            "className": "Hyresgäst",
            "contacts": Array [
              Object {
                "emailAddresses": Array [
                  Object {
                    "address": "Anna.Ibrahimovic@Hemma.se",
                    "type": "Private",
                  },
                  Object {
                    "address": "Anna.Ibrahimovic@jobbet.se",
                    "type": "Work",
                  },
                ],
                "firstName": "Anna",
                "fullName": "Anna Ibrahimovic",
                "lastName": "Ibrahimovic",
                "phoneNumbers": Array [
                  Object {
                    "number": "9566-463288",
                    "type": "Home",
                  },
                  Object {
                    "number": "5938-191763",
                    "type": "Work",
                  },
                  Object {
                    "number": "070-9167130",
                    "type": "MobilePrivate",
                  },
                  Object {
                    "number": "12345",
                    "type": "MobileWork",
                  },
                  Object {
                    "number": "12345",
                    "type": "Fax",
                  },
                ],
                "type": "Primary",
              },
            ],
            "createDate": "2015-11-18T09:21:06",
            "createdBy": "Script",
            "emailAddresses": Array [
              Object {
                "address": "12345@12345.com",
                "type": "Private",
              },
              Object {
                "address": "12345@12345.com",
                "type": "Work",
              },
            ],
            "fullName": "Anna Jansson",
            "id": "12345",
            "name": "Anna",
            "phoneNumbers": Array [
              Object {
                "number": "12345-123456",
                "type": "Home",
              },
              Object {
                "number": "12345-123456",
                "type": "Work",
              },
              Object {
                "number": "12345-123456",
                "type": "MobilePrivate",
              },
              Object {
                "number": "12345-123456",
                "type": "MobileWork",
              },
              Object {
                "number": "12345-123456",
                "type": "Fax",
              },
            ],
            "socialSecurityNumber": "811010-1010",
          },
        ]
      `)
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
