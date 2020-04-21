import {
  fi2LeaseContractsJson,
  fi2LeaseContractJson,
} from '../__fixtures__/fastAPIAdapterResult.fixture'
import { client } from '@app/adapters/fastapiadapter'
import service from '../index'

jest.mock('@app/adapters/fastapiadapter')

describe('#leasecontractservice', () => {
  beforeEach(() => {
    //console.log = jest.fn()
    console.error = jest.fn()

    jest.resetAllMocks()
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
            "rentalObjects": Array [
              Object {
                "id": "OBJ-16010204",
                "type": "fi2spatisystem",
              },
            ],
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
            "rentalObjects": Array [
              Object {
                "id": "OBJ-0130202",
                "type": "fi2spatisystem",
              },
            ],
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
            "rentalObjects": Array [
              Object {
                "id": "OBJ-06020103",
                "type": "fi2spatisystem",
              },
            ],
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
          "rentalObjects": Array [
            Object {
              "id": "OBJ-16010204",
              "type": "fi2spatisystem",
            },
          ],
          "signDate": "2001-12-19",
          "terminatedDate": "",
          "terminationReason": "",
        }
      `)
    })
  })
})