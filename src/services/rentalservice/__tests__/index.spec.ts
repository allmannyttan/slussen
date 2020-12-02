import {
  fi2SpatiSystemsJson,
  fi2SpatiSystemJson,
  fi2SpatiSystemWithDocumentJson,
} from '../__fixtures__/fastAPIAdapterResult.fixture'
import { client } from '@app/adapters/fastapiadapter'
import service from '../index'
import { authMiddleware } from '@app/middleware/auth'
import helper from '@app/helpers/fastAPIXmlListHelper'

import supertest from 'supertest'

jest.mock('@app/adapters/postgres')
jest.mock('@app/adapters/fastapiadapter')
jest.mock('@app/helpers/fastAPIXmlListHelper')
jest.mock('@app/middleware/auth')
jest.mock('@app/config', () => ({
  port: 0,
  fastAPI: {
    baseUrl: 'test',
    limit: 50,
  },
  auth: {
    secret: 'a secret',
  },
}))

import app from '../../../server'

const verifyGetRouteIsProtected = async (route: string) => {
  try {
    await supertest(app).get(route).expect(200)
    expect(authMiddleware).toHaveBeenCalledTimes(1)
  } catch (error) {
    fail(error)
  }
}

describe('#rentalsservice', () => {
  beforeEach(() => {
    console.log = jest.fn()
    console.error = jest.fn()

    jest.resetAllMocks()
    ;(helper.getNameFromClasslist as jest.Mock).mockReturnValue('mocked')
  })

  describe('#getRentals', () => {
    test('uses fast api adapter to get rentals', async () => {
      ;(client.get as jest.Mock).mockResolvedValueOnce(fi2SpatiSystemsJson)

      await service.getRentals()

      expect(client.get).toHaveBeenCalledTimes(1)
      expect(client.get).toHaveBeenCalledWith({ url: 'fi2spatisystem/?limit=50' })
    })

    test('returns rentals in correct format', async () => {
      ;(client.get as jest.Mock).mockResolvedValueOnce(fi2SpatiSystemsJson)

      const result = await service.getRentals()

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
            ],
            "areas": Array [
              Object {
                "derivedFrom": "Default",
                "measuredBy": "Kalles Mätning AB",
                "measuredDate": "2005-10-01",
                "measuredType": undefined,
                "perimeter": "0 m",
                "size": "1100 m2",
                "status": "Def",
                "type": "LOA",
              },
              Object {
                "derivedFrom": "Default",
                "measuredBy": "Kalles Mätning AB",
                "measuredDate": "2005-10-01",
                "measuredType": undefined,
                "perimeter": "0 m",
                "size": "212 m2",
                "status": "Def",
                "type": "BOA",
              },
              Object {
                "derivedFrom": "Default",
                "measuredBy": "Kalles Mätning AB",
                "measuredDate": "2005-10-01",
                "measuredType": undefined,
                "perimeter": "0 m",
                "size": "227 m2",
                "status": "Def",
                "type": "BRA",
              },
              Object {
                "derivedFrom": "Default",
                "measuredBy": "Kalles Mätning AB",
                "measuredDate": "2005-10-01",
                "measuredType": undefined,
                "perimeter": "0 m",
                "size": "249 m2",
                "status": "Def",
                "type": "BTA",
              },
              Object {
                "derivedFrom": "Default",
                "measuredBy": "Kalles Mätning AB",
                "measuredDate": "2005-10-01",
                "measuredType": undefined,
                "perimeter": "0 m",
                "size": "262 m2",
                "status": "Def",
                "type": "AGAR",
              },
              Object {
                "derivedFrom": "Default",
                "measuredBy": "Kalles Mätning AB",
                "measuredDate": "2005-10-01",
                "measuredType": undefined,
                "perimeter": "0 m",
                "size": "30 m2",
                "status": "Def",
                "type": "ATEMP",
              },
            ],
            "changeDate": "2015-11-18T09:37:34",
            "changedBy": "Script",
            "createDate": "2015-11-18T09:37:34",
            "createdBy": "Script",
            "description": "Lägenhet",
            "documents": Array [
              Object {
                "className": "mocked",
                "description": "Exempeldokument",
                "id": Array [
                  "23",
                ],
                "link": "http://www.fastapi.se/apidocprop/v1/Documents/example.txt",
              },
              Object {
                "className": "mocked",
                "description": "Exempeldokument",
                "id": Array [
                  "30",
                ],
                "link": "http://www.fastapi.se/apidocprop/v1/Documents/example2.txt",
              },
            ],
            "fullName": "Lägenhet",
            "guid": "C6395082-FBDC-4930-8219-580E082EB9B4",
            "id": "12345",
            "name": "Lägenhet",
            "type": "mocked",
          },
          Object {
            "addresses": Array [],
            "areas": Array [
              Object {
                "derivedFrom": "Default",
                "measuredBy": "Kalles Mätning AB",
                "measuredDate": "2005-10-01",
                "measuredType": undefined,
                "perimeter": "0 m",
                "size": "1100 m2",
                "status": "Def",
                "type": "LOA",
              },
              Object {
                "derivedFrom": "Default",
                "measuredBy": "Kalles Mätning AB",
                "measuredDate": "2005-10-01",
                "measuredType": undefined,
                "perimeter": "0 m",
                "size": "212 m2",
                "status": "Def",
                "type": "BOA",
              },
              Object {
                "derivedFrom": "Default",
                "measuredBy": "Kalles Mätning AB",
                "measuredDate": "2005-10-01",
                "measuredType": undefined,
                "perimeter": "0 m",
                "size": "227 m2",
                "status": "Def",
                "type": "BRA",
              },
              Object {
                "derivedFrom": "Default",
                "measuredBy": "Kalles Mätning AB",
                "measuredDate": "2005-10-01",
                "measuredType": undefined,
                "perimeter": "0 m",
                "size": "249 m2",
                "status": "Def",
                "type": "BTA",
              },
              Object {
                "derivedFrom": "Default",
                "measuredBy": "Kalles Mätning AB",
                "measuredDate": "2005-10-01",
                "measuredType": undefined,
                "perimeter": "0 m",
                "size": "262 m2",
                "status": "Def",
                "type": "AGAR",
              },
              Object {
                "derivedFrom": "Default",
                "measuredBy": "Kalles Mätning AB",
                "measuredDate": "2005-10-01",
                "measuredType": undefined,
                "perimeter": "0 m",
                "size": "30 m2",
                "status": "Def",
                "type": "ATEMP",
              },
            ],
            "changeDate": "2016-05-12T12:03:17",
            "changedBy": "Script",
            "createDate": "2016-05-12T12:03:17",
            "createdBy": "Script",
            "description": "Lägenhet",
            "documents": Array [
              Object {
                "className": "mocked",
                "description": "Exempeldokument",
                "id": Array [
                  "28",
                ],
                "link": "http://www.fastapi.se/apidocprop/v1/Documents/example.txt",
              },
              Object {
                "className": "mocked",
                "description": "Exempeldokument",
                "id": Array [
                  "29",
                ],
                "link": "http://www.fastapi.se/apidocprop/v1/Documents/example2.txt",
              },
            ],
            "fullName": "Lägenhet",
            "guid": "1659C2F3-D5F3-453F-8AAF-F5ECE065A273",
            "id": "123456",
            "name": "Lägenhet",
            "type": "mocked",
          },
          Object {
            "addresses": Array [
              Object {
                "attention": "736",
                "box": "190",
                "city": "Linkeboda",
                "co": "",
                "country": "SE",
                "guid": "B416F217-0192-4745-8587-5FDE18089DCF",
                "street": "Trädstigen 105",
                "type": "Home Address",
                "zipCode": "57025",
              },
              Object {
                "attention": "736",
                "box": "190",
                "city": "Linkeboda",
                "co": "",
                "country": "SE",
                "guid": "4DAED52B-AF53-408D-B581-6871AE7480C9",
                "street": "Trädstigen 105",
                "type": "Home Address",
                "zipCode": "57025",
              },
            ],
            "areas": Array [
              Object {
                "derivedFrom": Object {},
                "measuredBy": "Kalles Mätning AB",
                "measuredDate": "2005-10-01",
                "measuredType": undefined,
                "perimeter": "0 m",
                "size": "905.714285714285 m2",
                "status": "Def",
                "type": "LOA",
              },
              Object {
                "derivedFrom": Object {},
                "measuredBy": "Kalles Mätning AB",
                "measuredDate": "2005-10-01",
                "measuredType": undefined,
                "perimeter": "0 m",
                "size": "211 m2",
                "status": "Def",
                "type": "BOA",
              },
              Object {
                "derivedFrom": Object {},
                "measuredBy": "Kalles Mätning AB",
                "measuredDate": "2005-10-01",
                "measuredType": undefined,
                "perimeter": "0 m",
                "size": "236 m2",
                "status": "Def",
                "type": "BRA",
              },
              Object {
                "derivedFrom": Object {},
                "measuredBy": "Kalles Mätning AB",
                "measuredDate": "2005-10-01",
                "measuredType": undefined,
                "perimeter": "0 m",
                "size": "246 m2",
                "status": "Def",
                "type": "BTA",
              },
              Object {
                "derivedFrom": Object {},
                "measuredBy": "Kalles Mätning AB",
                "measuredDate": "2005-10-01",
                "measuredType": undefined,
                "perimeter": "0 m",
                "size": "268 m2",
                "status": "Def",
                "type": "AGAR",
              },
              Object {
                "derivedFrom": Object {},
                "measuredBy": "Kalles Mätning AB",
                "measuredDate": "2005-10-01",
                "measuredType": undefined,
                "perimeter": "0 m",
                "size": "291 m2",
                "status": "Def",
                "type": "ATEMP",
              },
            ],
            "changeDate": "2014-03-12T11:52:57",
            "changedBy": "Script",
            "createDate": "2009-07-12T18:31:49",
            "createdBy": "Script",
            "description": "Rymlig och fin 1-rummare",
            "documents": Array [],
            "fullName": undefined,
            "guid": "2E3C4967-0654-46B7-9DEA-5F31F7AD66D5",
            "id": "OBJ-0110101",
            "name": "1 Rum + Kök",
            "type": "mocked",
          },
          Object {
            "addresses": Array [
              Object {
                "attention": "369",
                "box": "433",
                "city": "Knutby",
                "co": "",
                "country": "SE",
                "guid": "10D01050-2E13-4BDD-BE27-52AFE13CF8A3",
                "street": "Lövstigen 274",
                "type": "Home Address",
                "zipCode": "13030",
              },
            ],
            "areas": Array [
              Object {
                "derivedFrom": "Default",
                "measuredBy": "Kalles Mätning AB",
                "measuredDate": "2005-10-01",
                "measuredType": undefined,
                "perimeter": "0 m",
                "size": "1100 m2",
                "status": "Def",
                "type": "LOA",
              },
              Object {
                "derivedFrom": "Default",
                "measuredBy": "Kalles Mätning AB",
                "measuredDate": "2005-10-01",
                "measuredType": undefined,
                "perimeter": "0 m",
                "size": "212 m2",
                "status": "Def",
                "type": "BOA",
              },
              Object {
                "derivedFrom": "Default",
                "measuredBy": "Kalles Mätning AB",
                "measuredDate": "2005-10-01",
                "measuredType": undefined,
                "perimeter": "0 m",
                "size": "227 m2",
                "status": "Def",
                "type": "BRA",
              },
              Object {
                "derivedFrom": "Default",
                "measuredBy": "Kalles Mätning AB",
                "measuredDate": "2005-10-01",
                "measuredType": undefined,
                "perimeter": "0 m",
                "size": "249 m2",
                "status": "Def",
                "type": "BTA",
              },
              Object {
                "derivedFrom": "Default",
                "measuredBy": "Kalles Mätning AB",
                "measuredDate": "2005-10-01",
                "measuredType": undefined,
                "perimeter": "0 m",
                "size": "262 m2",
                "status": "Def",
                "type": "AGAR",
              },
              Object {
                "derivedFrom": "Default",
                "measuredBy": "Kalles Mätning AB",
                "measuredDate": "2005-10-01",
                "measuredType": undefined,
                "perimeter": "0 m",
                "size": "30 m2",
                "status": "Def",
                "type": "ATEMP",
              },
            ],
            "changeDate": "2014-03-12T11:52:57",
            "changedBy": "Script",
            "createDate": "2002-11-29T03:34:42",
            "createdBy": "Script",
            "description": "Välplanerad och snygg 3-rummare",
            "documents": Array [],
            "fullName": undefined,
            "guid": "DB2D3C11-5576-419E-85C1-B6C7E5ECD095",
            "id": "OBJ-0110102",
            "name": "3 Rum + Kök",
            "type": "mocked",
          },
        ]
      `)
    })
  })

  describe('#getRental', () => {
    test('uses fast api adapter to get contract', async () => {
      ;(client.get as jest.Mock).mockResolvedValueOnce(fi2SpatiSystemJson)

      await service.getRental('123')

      expect(client.get).toHaveBeenCalledTimes(1)
      expect(client.get).toHaveBeenCalledWith({ url: 'fi2spatisystem/123' })
    })

    test('returns a contract in correct format', async () => {
      ;(client.get as jest.Mock).mockResolvedValueOnce(fi2SpatiSystemJson)

      const result = await service.getRental('123')

      expect(result).toMatchInlineSnapshot(`
        Object {
          "addresses": Array [],
          "areas": Array [
            Object {
              "derivedFrom": "Default",
              "measuredBy": "Kalles Mätning AB",
              "measuredDate": "2005-10-01",
              "measuredType": undefined,
              "perimeter": "0 m",
              "size": "1100 m2",
              "status": "Def",
              "type": "LOA",
            },
            Object {
              "derivedFrom": "Default",
              "measuredBy": "Kalles Mätning AB",
              "measuredDate": "2005-10-01",
              "measuredType": undefined,
              "perimeter": "0 m",
              "size": "212 m2",
              "status": "Def",
              "type": "BOA",
            },
            Object {
              "derivedFrom": "Default",
              "measuredBy": "Kalles Mätning AB",
              "measuredDate": "2005-10-01",
              "measuredType": undefined,
              "perimeter": "0 m",
              "size": "227 m2",
              "status": "Def",
              "type": "BRA",
            },
            Object {
              "derivedFrom": "Default",
              "measuredBy": "Kalles Mätning AB",
              "measuredDate": "2005-10-01",
              "measuredType": undefined,
              "perimeter": "0 m",
              "size": "249 m2",
              "status": "Def",
              "type": "BTA",
            },
            Object {
              "derivedFrom": "Default",
              "measuredBy": "Kalles Mätning AB",
              "measuredDate": "2005-10-01",
              "measuredType": undefined,
              "perimeter": "0 m",
              "size": "262 m2",
              "status": "Def",
              "type": "AGAR",
            },
            Object {
              "derivedFrom": "Default",
              "measuredBy": "Kalles Mätning AB",
              "measuredDate": "2005-10-01",
              "measuredType": undefined,
              "perimeter": "0 m",
              "size": "30 m2",
              "status": "Def",
              "type": "ATEMP",
            },
          ],
          "changeDate": "2016-05-12T12:03:17",
          "changedBy": "Script",
          "createDate": "2016-05-12T12:03:17",
          "createdBy": "Script",
          "description": "Lägenhet",
          "documents": Array [
            Object {
              "className": "mocked",
              "description": "Exempeldokument",
              "id": Array [
                "28",
              ],
              "link": "http://www.fastapi.se/apidocprop/v1/Documents/example.txt",
            },
            Object {
              "className": "mocked",
              "description": "Exempeldokument",
              "id": Array [
                "29",
              ],
              "link": "http://www.fastapi.se/apidocprop/v1/Documents/example2.txt",
            },
          ],
          "fullName": "Lägenhet",
          "guid": "1659C2F3-D5F3-453F-8AAF-F5ECE065A273",
          "id": "123456",
          "name": "Lägenhet",
          "type": "mocked",
        }
      `)
    })

    test('handles documents correctly', async () => {
      ;(client.get as jest.Mock).mockResolvedValueOnce(fi2SpatiSystemWithDocumentJson)

      const result = await service.getRental('123')

      expect(result.documents).not.toBeNull()
      expect(result.documents.length).toEqual(2)
      expect(result.documents[0]).toMatchInlineSnapshot(`
        Object {
          "className": "mocked",
          "description": "Exempeldokument",
          "id": Array [
            "28",
          ],
          "link": "http://www.fastapi.se/apidocprop/v1/Documents/example.txt",
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

    it('GET /rentals is protected', async () => {
      ;(client.get as jest.Mock).mockResolvedValueOnce(fi2SpatiSystemsJson)
      await verifyGetRouteIsProtected('/rentals')
    })

    it('GET /rentals/:id is protected', async () => {
      ;(client.get as jest.Mock).mockResolvedValueOnce(fi2SpatiSystemJson)
      await verifyGetRouteIsProtected('/rentals/1')
    })
  })
})
