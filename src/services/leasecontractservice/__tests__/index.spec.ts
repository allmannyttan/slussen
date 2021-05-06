import {
  fi2LeaseContractsJson,
  fi2LeaseContractJson,
  fi2LeaseContractWithDocumentJson,
  fi2LeaseContractsJsonWithRentals,
} from '../__fixtures__/fastAPIAdapterResult.fixture'
import { client } from '@app/adapters/fastapiadapter'
import service from '../index'
import { authMiddleware } from '@app/middleware/auth'
import helper from '@app/helpers/fastAPIXmlListHelper'
import moment from 'moment'
import supertest from 'supertest'

jest.mock('@app/adapters/postgres')
jest.mock('@app/middleware/auth')
jest.mock('@app/adapters/fastapiadapter')
jest.mock('@app/helpers/fastAPIXmlListHelper')
jest.mock('@app/config', () => ({
  port: 0,
  fastAPI: {
    baseUrl: 'test',
    limit: 1234,
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

describe('#leasecontractservice', () => {
  beforeEach(() => {
    console.log = jest.fn()
    console.error = jest.fn()

    jest.resetAllMocks()
    ;(helper.getNameFromClasslist as jest.Mock).mockReturnValue('mocked')
  })

  describe('#getLeaseContracts', () => {
    test('uses fast api adapter to get contracts', async () => {
      ;(client.get as jest.Mock).mockResolvedValueOnce(fi2LeaseContractsJson)

      await service.getLeaseContracts()

      const today = moment().format('YYYY-MM-DD')

      expect(client.get).toHaveBeenCalledTimes(1)
      expect(client.get).toHaveBeenCalledWith({
        url: `fi2leasecontract/?limit=1234&filter=fi2lease_initialdate<:'${today}';fi2lease_currenddate>'${today}'`,
      })
    })

    test('returns contracts in correct format', async () => {
      ;(client.get as jest.Mock).mockResolvedValueOnce(fi2LeaseContractsJson)

      const result = await service.getLeaseContracts()

      expect(result).toMatchInlineSnapshot(`
        Array [
          Object {
            "changeDate": "2014-03-12T11:54:18",
            "changedBy": "",
            "className": "mocked",
            "createDate": "2015-04-23T09:13:17",
            "createdBy": "",
            "currentEndDate": "2020-08-01",
            "date": "2001-12-18",
            "description": "Tillsvidareavtal för en bostad",
            "documents": Array [],
            "endingDate": "",
            "guid": "94F6BA02-EE7E-4076-B5B4-5C3062ED304B",
            "id": "1",
            "initialDate": "2002-02-01T00:00:00",
            "noticeDate": "",
            "noticeStatus": "",
            "noticeTime": "3",
            "noticedBy": "",
            "partners": Array [
              Object {
                "className": "mocked",
                "id": "PARTN-147",
                "roleName": "mocked",
              },
              Object {
                "className": "mocked",
                "id": "PARTN-162",
                "roleName": "mocked",
              },
              Object {
                "className": "mocked",
                "id": "PARTN-273",
                "roleName": "mocked",
              },
            ],
            "renewalDate": "2020-05-01",
            "rentalObject": Object {
              "id": "OBJ-16010204",
              "type": "Rental",
            },
            "signDate": "2001-12-19",
            "terminatedDate": "",
            "terminationReason": "",
          },
          Object {
            "changeDate": "2014-03-12T11:54:18",
            "changedBy": "Script",
            "className": "mocked",
            "createDate": "2008-03-16T11:41:13",
            "createdBy": "Script",
            "currentEndDate": "2020-08-01",
            "date": "1996-01-22",
            "description": "",
            "documents": Array [],
            "endingDate": "",
            "guid": "4AE81487-BF2B-43DC-A5B6-86F9B0F99F62",
            "id": "10",
            "initialDate": "1996-01-22T00:00:00",
            "noticeDate": "",
            "noticeStatus": "",
            "noticeTime": "3",
            "noticedBy": "",
            "partners": Array [
              Object {
                "className": "mocked",
                "id": "PARTN-32",
                "roleName": "mocked",
              },
              Object {
                "className": "mocked",
                "id": "PARTN-33",
                "roleName": "mocked",
              },
              Object {
                "className": "mocked",
                "id": "PARTN-140",
                "roleName": "mocked",
              },
              Object {
                "className": "mocked",
                "id": "PARTN-9",
                "roleName": "mocked",
              },
            ],
            "renewalDate": "2020-05-01",
            "rentalObject": Object {
              "id": "OBJ-0130202",
              "type": "Rental",
            },
            "signDate": "1996-01-22",
            "terminatedDate": "",
            "terminationReason": "",
          },
          Object {
            "changeDate": "2014-03-12T11:54:18",
            "changedBy": "Script",
            "className": "mocked",
            "createDate": "1996-01-10T09:42:09",
            "createdBy": "Script",
            "currentEndDate": "2020-08-01",
            "date": "1996-04-27",
            "description": "",
            "documents": Array [],
            "endingDate": "",
            "guid": "80FECCE8-D4EE-4E2E-A8EB-62733F19F835",
            "id": "100",
            "initialDate": "1996-04-27T00:00:00",
            "noticeDate": "",
            "noticeStatus": "",
            "noticeTime": "3",
            "noticedBy": "",
            "partners": Array [
              Object {
                "className": "mocked",
                "id": "PARTN-194",
                "roleName": "mocked",
              },
              Object {
                "className": "mocked",
                "id": "PARTN-229",
                "roleName": "mocked",
              },
              Object {
                "className": "mocked",
                "id": "PARTN-283",
                "roleName": "mocked",
              },
              Object {
                "className": "mocked",
                "id": "PARTN-58",
                "roleName": "mocked",
              },
            ],
            "renewalDate": "2020-05-01",
            "rentalObject": Object {
              "id": "OBJ-06020103",
              "type": "Rental",
            },
            "signDate": "1996-04-27",
            "terminatedDate": "",
            "terminationReason": "",
          },
        ]
      `)
    })

    test('throws error if client rejects', async () => {
      ;(client.get as jest.Mock).mockRejectedValueOnce('error')

      try {
        await service.getLeaseContracts()
      } catch (err) {
        console.log(err)
        expect(err).toEqual(new Error('error'))
      }
    })
  })

  describe('#getLeaseContract', () => {
    test('uses fast api adapter to get contract', async () => {
      ;(client.get as jest.Mock).mockResolvedValueOnce(fi2LeaseContractJson)

      await service.getLeaseContract('123')

      expect(client.get).toHaveBeenCalledTimes(1)
      expect(client.get).toHaveBeenCalledWith({ url: 'fi2leasecontract/123' })
    })

    test('returns a contract in correct format', async () => {
      ;(client.get as jest.Mock).mockResolvedValueOnce(fi2LeaseContractJson)

      const result = await service.getLeaseContract('123')

      expect(result).toMatchInlineSnapshot(`
        Object {
          "changeDate": "2015-11-18T09:25:46",
          "changedBy": "Script",
          "className": "mocked",
          "createDate": "2015-11-18T09:25:46",
          "createdBy": "Script",
          "currentEndDate": "2020-11-18",
          "date": "2009-11-18",
          "description": "Kontraktsbeskrivning",
          "documents": Array [
            Object {
              "className": "mocked",
              "description": "Exempeldokument",
              "id": "23",
              "link": "http://www.fastapi.se/apidocprop/v1/Documents/example.txt",
            },
          ],
          "endingDate": "2020-11-18",
          "guid": "F858990C-DBFD-4355-A5BD-EEA7DB95B704",
          "id": "12345",
          "initialDate": "2010-11-18T09:25:46",
          "noticeDate": "2018-11-18",
          "noticeStatus": "mocked",
          "noticeTime": "3",
          "noticedBy": "HG",
          "partners": Array [
            Object {
              "className": "mocked",
              "id": "12345",
              "roleName": "mocked",
            },
          ],
          "renewalDate": "2020-08-18",
          "rentalObject": Object {
            "id": "12345",
            "type": "Rental",
          },
          "signDate": "2009-11-18",
          "terminatedDate": "2020-11-18",
          "terminationReason": "mocked",
        }
      `)
    })

    test('creates appropriate querystring for rentalid filter', async () => {
      ;(client.get as jest.Mock).mockResolvedValueOnce(fi2LeaseContractsJson)

      await service.getLeaseContracts('foo')

      const today = moment().format('YYYY-MM-DD')

      expect(client.get).toHaveBeenCalledTimes(1)
      expect(client.get).toHaveBeenCalledWith({
        url: `fi2leasecontract/?limit=1234&filter=fi2lease_parentobject@fi2spatisystem.fi2parent_ids.fi2_id:'foo';fi2lease_initialdate<:'${today}';fi2lease_currenddate>'${today}'`,
      })
    })

    test('creates appropriate querystring for includeexpired', async () => {
      ;(client.get as jest.Mock).mockResolvedValueOnce(fi2LeaseContractsJson)

      await service.getLeaseContracts(undefined, true)

      const today = moment().format('YYYY-MM-DD')

      expect(client.get).toHaveBeenCalledTimes(1)
      expect(client.get).toHaveBeenCalledWith({ url: `fi2leasecontract/?limit=1234&filter=fi2lease_initialdate<:'${today}'` })
    })

    test('creates appropriate querystring for includetenants', async () => {
      ;(client.get as jest.Mock).mockResolvedValueOnce(fi2LeaseContractsJson)

      await service.getLeaseContracts(undefined, false, true)

      const today = moment().format('YYYY-MM-DD')

      expect(client.get).toHaveBeenCalledTimes(1)
      expect(client.get).toHaveBeenCalledWith({
        url: `fi2leasecontract/?limit=1234&include=fi2partner&filter=fi2lease_initialdate<:'${today}';fi2lease_currenddate>'${today}'`,
      })
    })

    test('creates appropriate querystring for includerentals', async () => {
      ;(client.get as jest.Mock).mockResolvedValueOnce(fi2LeaseContractsJson)

      await service.getLeaseContracts(undefined, false, false, true)

      const today = moment().format('YYYY-MM-DD')

      expect(client.get).toHaveBeenCalledTimes(1)
      expect(client.get).toHaveBeenCalledWith({
        url: `fi2leasecontract/?limit=1234&include=fi2spatisystem&filter=fi2lease_initialdate<:'${today}';fi2lease_currenddate>'${moment().format(
          'YYYY-MM-DD'
        )}'`,
      })
    })

    test('creates appropriate querystring for all parameters', async () => {
      ;(client.get as jest.Mock).mockResolvedValueOnce(fi2LeaseContractsJson)

      await service.getLeaseContracts('foo', true, true, true)

      const today = moment().format('YYYY-MM-DD')

      expect(client.get).toHaveBeenCalledTimes(1)
      expect(client.get).toHaveBeenCalledWith({
        url: `fi2leasecontract/?limit=1234&include=fi2partner,fi2spatisystem&filter=fi2lease_parentobject@fi2spatisystem.fi2parent_ids.fi2_id:'foo';fi2lease_initialdate<:'${today}'`,
      })
    })

    test('Returns nothing if Rentals type is other than "Lägenhet"', async () => {
      ;(helper.getNameFromClasslist as jest.Mock).mockReturnValue('Parkering')
      ;(client.get as jest.Mock).mockResolvedValueOnce(fi2LeaseContractsJsonWithRentals)

      const result = await service.getLeaseContracts('foo', true, true, true)

      const today = moment().format('YYYY-MM-DD')

      expect(client.get).toHaveBeenCalledTimes(1)
      expect(client.get).toHaveBeenCalledWith({
        url: `fi2leasecontract/?limit=1234&include=fi2partner,fi2spatisystem&filter=fi2lease_parentobject@fi2spatisystem.fi2parent_ids.fi2_id:'foo';fi2lease_initialdate<:'${today}'`,
      })
      expect(result).toEqual([])
    })

    test('Returns contracts if Rentals type is "Lägenhet"', async () => {
      ;(helper.getNameFromClasslist as jest.Mock).mockReturnValue('Lägenhet')
      ;(client.get as jest.Mock).mockResolvedValueOnce(fi2LeaseContractsJsonWithRentals)

      const result = await service.getLeaseContracts('foo', true, true, true)

      const today = moment().format('YYYY-MM-DD')

      expect(client.get).toHaveBeenCalledTimes(1)
      expect(client.get).toHaveBeenCalledWith({
        url: `fi2leasecontract/?limit=1234&include=fi2partner,fi2spatisystem&filter=fi2lease_parentobject@fi2spatisystem.fi2parent_ids.fi2_id:'foo';fi2lease_initialdate<:'${today}'`,
      })
      expect(result).toHaveLength(1)
    })

    test('handles documents correctly', async () => {
      ;(client.get as jest.Mock).mockResolvedValueOnce(fi2LeaseContractWithDocumentJson)

      const result = await service.getLeaseContract('123')

      expect(result.documents).not.toBeNull()
      expect(result.documents.length).toEqual(1)
      expect(result.documents[0]).toMatchInlineSnapshot(`
        Object {
          "className": "mocked",
          "description": "Exempeldokument",
          "id": "23",
          "link": "http://www.fastapi.se/apidocprop/v1/Documents/example.txt",
        }
      `)
    })

    test('throws error if client rejects', async () => {
      ;(client.get as jest.Mock).mockRejectedValueOnce('error')

      try {
        await service.getLeaseContract('123')
      } catch (err) {
        console.log(err)
        expect(err).toEqual(new Error('error'))
      }
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

    it('GET /leasecontracts is protected', async () => {
      ;(client.get as jest.Mock).mockResolvedValueOnce(fi2LeaseContractsJson)
      await verifyGetRouteIsProtected('/leasecontracts')
    })

    it('GET /leasecontracts/:id is protected', async () => {
      ;(client.get as jest.Mock).mockResolvedValueOnce(fi2LeaseContractJson)
      await verifyGetRouteIsProtected('/leasecontracts/1')
    })
  })
})
