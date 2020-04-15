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
                "co": null,
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
                "co": null,
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
                    "Private": "Anna.Ibrahimovic@Hemma.se",
                  },
                  Object {
                    "Work": "Anna.Ibrahimovic@jobbet.se",
                  },
                ],
                "firstName": "Anna",
                "fullName": "Anna Ibrahimovic",
                "lastName": "Ibrahimovic",
                "phoneNumbers": Array [
                  Object {
                    "Home": "9566-463288",
                  },
                  Object {
                    "Work": "5938-191763",
                  },
                  Object {
                    "MobilePrivate": "070-9167130",
                  },
                  Object {
                    "MobileWork": "12345",
                  },
                  Object {
                    "Fax": "12345",
                  },
                ],
                "type": "Primary",
              },
            ],
            "createDate": "2015-11-18T09:21:06",
            "createdBy": "Script",
            "emailAddresses": Array [
              Object {
                "Private": "12345@12345.com",
              },
              Object {
                "Work": "12345@12345.com",
              },
            ],
            "fullName": "Anna Jansson",
            "id": "12345",
            "name": "Anna",
            "phoneNumbers": Array [
              Object {
                "Home": "12345-123456",
              },
              Object {
                "Work": "12345-123456",
              },
              Object {
                "MobilePrivate": "12345-123456",
              },
              Object {
                "MobileWork": "12345-123456",
              },
              Object {
                "Fax": "12345-123456",
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
