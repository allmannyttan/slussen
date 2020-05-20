import { fi2PartnersJson, fi2SinglePartnerJson } from '../__fixtures__/fastAPIAdapterResult.fixture'
import { client } from '@app/adapters/fastapiadapter'
import service from '../index'
import { authMiddleware } from '@app/middleware/auth'
import helper from '@app/helpers/fastAPIXmlListHelper'

import supertest from 'supertest'

jest.mock('@app/adapters/fastapiadapter')
jest.mock('@app/helpers/fastAPIXmlListHelper')
jest.mock('@app/middleware/auth')
jest.mock('@app/config', () => ({
  port: 3336,
  fastAPI: {
    baseUrl: 'test',
  },
  auth: {
    secret: 'a secret',
  },
}))

import { app } from '../../../server'

const verifyGetRouteIsProtected = async (route: string) => {
  try {
    await supertest(app).get(route).expect(200)
    expect(authMiddleware).toHaveBeenCalledTimes(1)
  } catch (error) {
    fail(error)
  }
}

describe('#tenantservice', () => {
  beforeEach(() => {
    console.log = jest.fn()
    console.error = jest.fn()

    jest.resetAllMocks()
    ;(helper.getNameFromClasslist as jest.Mock).mockReturnValue('mocked')
  })

  describe('#getTenants', () => {
    test('uses fast api adapter to get tenants', async () => {
      ;(client.get as jest.Mock).mockResolvedValueOnce(fi2PartnersJson)

      await service.getTenants()

      expect(client.get).toHaveBeenCalledTimes(1)
      expect(client.get).toHaveBeenCalledWith({
        url: "fi2partner?filter=fi2part_class.fi2class_code:'16'",
      })
    })

    test('returns tenants in correct format', async () => {
      ;(client.get as jest.Mock).mockResolvedValueOnce(fi2PartnersJson)

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
            "className": "mocked",
            "contact": Object {
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

  describe('#getTenant', () => {
    test('uses fast api adapter to get tenant', async () => {
      ;(client.get as jest.Mock).mockResolvedValueOnce(fi2SinglePartnerJson)

      await service.getTenant('123')

      expect(client.get).toHaveBeenCalledTimes(1)
      expect(client.get).toHaveBeenCalledWith({ url: 'fi2partner/123' })
    })

    test('returns a tenant in correct format', async () => {
      ;(client.get as jest.Mock).mockResolvedValueOnce(fi2SinglePartnerJson)

      const result = await service.getTenant('123')

      expect(result).toMatchInlineSnapshot(`
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
          "className": "mocked",
          "contact": Object {
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
        }
      `)
    })
  })

  describe('authorized routes', () => {
    beforeEach(() => {
      ;(authMiddleware as jest.Mock).mockImplementation((req, res, next) => {
        req.auth = {}
        next()
      })
    })

    afterEach(() => {
      jest.resetAllMocks()
    })

    it('GET /tenants is protected', async () => {
      ;(client.get as jest.Mock).mockResolvedValueOnce(fi2PartnersJson)
      await verifyGetRouteIsProtected('/tenants')
    })

    it('GET /tenants/:id is protected', async () => {
      ;(client.get as jest.Mock).mockResolvedValueOnce(fi2SinglePartnerJson)
      await verifyGetRouteIsProtected('/tenants/1')
    })
  })
})
