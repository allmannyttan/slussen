import {
  fi2LeaseContractsJson,
  fi2LeaseContractJson,
  fi2LeaseContractWithDocumentJson,
} from '../__fixtures__/fastAPIAdapterResult.fixture'
import { client } from '@app/adapters/fastapiadapter'
import service from '../index'
import config from '../../../config'

jest.mock('@app/adapters/fastapiadapter')
jest.mock('../../../config')

describe('#leasecontractservice', () => {
  beforeEach(() => {
    //console.log = jest.fn()
    console.error = jest.fn()

    jest.resetAllMocks()

    config.fastAPI = {
      baseUrl: 'test',
      accessToken: 'test',
    }
  })

  describe('#getLeaseContracts', () => {
    test('uses fast api adapter to get contracts', async () => {
      ;(client.get as jest.Mock).mockResolvedValueOnce(fi2LeaseContractsJson)

      await service.getLeaseContracts()

      expect(client.get).toHaveBeenCalledTimes(1)
      expect(client.get).toHaveBeenCalledWith('fi2leasecontract/')
    })

    test('returns contracts in correct format', async () => {
      ;(client.get as jest.Mock).mockResolvedValueOnce(fi2LeaseContractsJson)

      const result = await service.getLeaseContracts()

      expect(result).toMatchInlineSnapshot(`
        Array [
          Object {
            "changeDate": "2014-03-12T11:54:18",
            "changedBy": "",
            "className": "Bostadsavtal",
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
                "className": "Hyresgäst",
                "id": "PARTN-147",
                "roleName": "Hyresgäst",
              },
              Object {
                "className": "Hyresgäst",
                "id": "PARTN-162",
                "roleName": "Hyresgäst",
              },
              Object {
                "className": "Hyresgäst",
                "id": "PARTN-273",
                "roleName": "Hyresgäst",
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
            "className": "Bostadsavtal",
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
                "className": "Hyresgäst",
                "id": "PARTN-32",
                "roleName": "Hyresgäst",
              },
              Object {
                "className": "Hyresgäst",
                "id": "PARTN-33",
                "roleName": "Hyresgäst",
              },
              Object {
                "className": "Hyresgäst",
                "id": "PARTN-140",
                "roleName": "Hyresgäst",
              },
              Object {
                "className": "Hyresgäst",
                "id": "PARTN-9",
                "roleName": "Hyresgäst",
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
            "className": "Bostadsavtal",
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
                "className": "Hyresgäst",
                "id": "PARTN-194",
                "roleName": "Hyresgäst",
              },
              Object {
                "className": "Hyresgäst",
                "id": "PARTN-229",
                "roleName": "Hyresgäst",
              },
              Object {
                "className": "Hyresgäst",
                "id": "PARTN-283",
                "roleName": "Hyresgäst",
              },
              Object {
                "className": "Hyresgäst",
                "id": "PARTN-58",
                "roleName": "Hyresgäst",
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
  })

  describe('#getLeaseContract', () => {
    test('uses fast api adapter to get contract', async () => {
      ;(client.get as jest.Mock).mockResolvedValueOnce(fi2LeaseContractJson)

      await service.getLeaseContract('123')

      expect(client.get).toHaveBeenCalledTimes(1)
      expect(client.get).toHaveBeenCalledWith('fi2leasecontract/123')
    })

    test('returns a contract in correct format', async () => {
      ;(client.get as jest.Mock).mockResolvedValueOnce(fi2LeaseContractJson)

      const result = await service.getLeaseContract('123')

      expect(result).toMatchInlineSnapshot(`
        Object {
          "changeDate": "2015-11-18T09:25:46",
          "changedBy": "Script",
          "className": "Hyresavtal",
          "createDate": "2015-11-18T09:25:46",
          "createdBy": "Script",
          "currentEndDate": "2020-11-18",
          "date": "2009-11-18",
          "description": "Kontraktsbeskrivning",
          "documents": Array [
            Object {
              "className": "Internt",
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
          "noticeStatus": "Definitivt",
          "noticeTime": "3",
          "noticedBy": "HG",
          "partners": Array [
            Object {
              "className": "Hyresgäst",
              "id": "12345",
              "roleName": "Hyresgäst",
            },
          ],
          "renewalDate": "2020-08-18",
          "rentalObject": Object {
            "id": "12345",
            "type": "Rental",
          },
          "signDate": "2009-11-18",
          "terminatedDate": "2020-11-18",
          "terminationReason": "",
        }
      `)
    })

    test('handles documents correctly', async () => {
      ;(client.get as jest.Mock).mockResolvedValueOnce(fi2LeaseContractWithDocumentJson)

      const result = await service.getLeaseContract('123')

      expect(result.documents).not.toBeNull()
      expect(result.documents.length).toEqual(1)
      expect(result.documents[0]).toMatchInlineSnapshot(`
        Object {
          "className": "Internt",
          "description": "Exempeldokument",
          "id": "23",
          "link": "http://www.fastapi.se/apidocprop/v1/Documents/example.txt",
        }
      `)
    })
  })
})
