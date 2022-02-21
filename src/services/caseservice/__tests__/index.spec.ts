import { client } from '../../../adapters/fastapiadapter'
import { authMiddleware } from '../../../middleware/auth'
import { createToken, refreshToken } from '../../../helpers/jwt'

import supertest from 'supertest'
import service from '../index'

import mockFi2cases from '../__fixtures__/fi2cases.fixture'
import mockFi2case from '../__fixtures__/fi2case.fixture'

jest.mock('../../../config', () => ({
  port: 0,
  auth: {
    secret: 'a secret',
  },
}))

jest.mock('@app/adapters/postgres')
jest.mock('@app/middleware/auth')
jest.mock('@app/adapters/fastapiadapter')
jest.mock('../../../helpers/jwt')
jest.mock('../../../helpers/hash')

import server from '../../../server'

beforeEach(() => {
  ;(authMiddleware as jest.Mock).mockImplementation((req, res, next) => {
    req.auth = {}
    next()
  })
  ;(createToken as jest.Mock).mockResolvedValue({ token: 'a token' })
  ;(refreshToken as jest.Mock).mockResolvedValue({ token: 'a token' })
})

const verifyGetRouteIsProtected = async (route: string, expectedStatus = 200) => {
  try {
    await supertest(server).get(route).expect(expectedStatus)
    expect(authMiddleware).toHaveBeenCalledTimes(1)
  } catch (error) {
    fail(error)
  }
}

const verifyPutRouteIsProtected = async (route: string, payload: {} = {}, expectedStatus = 200) => {
  try {
    await supertest(server).put(route).send(payload).expect(expectedStatus)
    expect(authMiddleware).toHaveBeenCalledTimes(1)
  } catch (error) {
    fail(error)
  }
}

const verifyPostRouteIsProtected = async (
  route: string,
  payload: {} = {},
  expectedStatus = 200
) => {
  try {
    await supertest(server).post(route).send(payload).expect(expectedStatus)
    expect(authMiddleware).toHaveBeenCalledTimes(1)
  } catch (error) {
    fail(error)
  }
}

describe('#caseservice', () => {
  describe('POST /cases/', () => {
    const PAYLOAD = {
      rentalId: '12345',
      comment: 'Det är tråkigt att inte kunna se min mat',
      description: 'Lägenhet -> Kök -> Vitvaror -> Kyl: Söndrig lampa',
    }
    it('returns a Case when successful', async () => {
      ;(client.post as jest.Mock).mockResolvedValueOnce(mockFi2case)
      const response = await service.createCase(PAYLOAD)
      expect(mockFi2case.fi2case.id === response.id)
    })

    it('returns an error message when unsuccessful', async () => {
      ;(client.post as jest.Mock).mockResolvedValueOnce({ errormessage: 'Ajabaja' })
      await expect(service.createCase(PAYLOAD)).rejects.toEqual('Ajabaja')
    })

    it('passes data along', async () => {
      ;(client.post as jest.Mock).mockResolvedValueOnce(mockFi2case)
      await service.createCase(PAYLOAD)
      expect(client.post as jest.Mock).toHaveBeenCalledWith(
        { url: 'fi2case' },
        `<fi2case xmlns="http://www.fi2.se/schemas/1.31"><fi2case_descr lang="sv" usage="Description">Lägenhet -> Kök -> Vitvaror -> Kyl: Söndrig lampa</fi2case_descr><fi2case_descr lang="sv" usage="Comment">Det är tråkigt att inte kunna se min mat</fi2case_descr><fi2case_category><fi2class_code>Case</fi2class_code><fi2class_scheme><fi2scheme_id>Class_Fi2CaseCategoryType_01</fi2scheme_id><fi2scheme_name>Ärendetyp Felanmälningar</fi2scheme_name><fi2scheme_url>http://www.fastapi.se/lists/classlist/Class_Fi2CaseCategoryType_01.xml</fi2scheme_url></fi2class_scheme></fi2case_category><fi2case_status><fi2class_code>Pending</fi2class_code><fi2class_scheme><fi2scheme_id>Class_Fi2CaseStatus_01</fi2scheme_id><fi2scheme_name>Status Felanmälningar</fi2scheme_name><fi2scheme_url>http://www.fastapi.se/lists/classlist/Class_Fi2CaseStatus_01.xml</fi2scheme_url></fi2class_scheme></fi2case_status><fi2case_parentobject fi2item="fi2property"><fi2parent_ids><fi2_id>12345</fi2_id></fi2parent_ids></fi2case_parentobject></fi2case>`
      )
    })
  })

  describe('PUT /cases/:id', () => {
    it('returns a Case when successful', async () => {
      ;(client.get as jest.Mock).mockResolvedValueOnce(mockFi2case)
      ;(client.put as jest.Mock).mockResolvedValueOnce(mockFi2case)
      const response = await service.updateCase(mockFi2case.fi2case.id, {
        description: 'Frys',
      })
      expect(mockFi2case.fi2case.id === response.id)
    })

    it('returns an error message when unsuccessful', async () => {
      ;(client.get as jest.Mock).mockResolvedValueOnce(mockFi2case)
      ;(client.put as jest.Mock).mockResolvedValueOnce({ errormessage: 'Ajabaja' })
      await expect(
        service.updateCase(mockFi2case.fi2case.id, {
          comment: 'Hej!',
        })
      ).rejects.toEqual('Ajabaja')
    })

    it('passes data along', async () => {
      ;(client.get as jest.Mock).mockResolvedValueOnce(mockFi2case)
      ;(client.put as jest.Mock).mockResolvedValueOnce(mockFi2case)
      await service.updateCase(mockFi2case.fi2case.id, { description: 'Foobar' })
      expect(client.put as jest.Mock).toHaveBeenCalledWith(
        { url: `fi2case/${mockFi2case.fi2case.id}` },
        `<fi2case xmlns="http://www.fi2.se/schemas/1.31" id="12345"><fi2case_ids><fi2_id usage="CaseNumber"></fi2_id></fi2case_ids><fi2case_value><fi2value_code>ChangedBy</fi2value_code><fi2value_scheme><fi2scheme_id>VB001_005_001</fi2scheme_id><fi2scheme_name>Tillåtna värden för alla typer av fi2objekt</fi2scheme_name><fi2scheme_url>http://www.fi2.se/valuelist/VB001_005_001.xml</fi2scheme_url></fi2value_scheme><fi2value_value>Script</fi2value_value></fi2case_value><fi2case_value><fi2value_code>ChangedDate</fi2value_code><fi2value_scheme><fi2scheme_id>VB001_005_001</fi2scheme_id><fi2scheme_name>Tillåtna värden för alla typer av fi2objekt</fi2scheme_name><fi2scheme_url>http://www.fi2.se/valuelist/VB001_005_001.xml</fi2scheme_url></fi2value_scheme><fi2value_value>2018-10-24T00:00:00</fi2value_value></fi2case_value><fi2case_value><fi2value_code>CreatedBy</fi2value_code><fi2value_scheme><fi2scheme_id>VB001_005_001</fi2scheme_id><fi2scheme_name>Tillåtna värden för alla typer av fi2objekt</fi2scheme_name><fi2scheme_url>http://www.fi2.se/valuelist/VB001_005_001.xml</fi2scheme_url></fi2value_scheme><fi2value_value>Script</fi2value_value></fi2case_value><fi2case_value><fi2value_code>CreatedDate</fi2value_code><fi2value_scheme><fi2scheme_id>VB001_005_001</fi2scheme_id><fi2scheme_name>Tillåtna värden för alla typer av fi2objekt</fi2scheme_name><fi2scheme_url>http://www.fi2.se/valuelist/VB001_005_001.xml</fi2scheme_url></fi2value_scheme><fi2value_value>2018-10-23T00:00:00</fi2value_value></fi2case_value><fi2case_value><fi2value_code>ETag</fi2value_code><fi2value_scheme><fi2scheme_id>VB001_005_001</fi2scheme_id><fi2scheme_name>Tillåtna värden för alla typer av fi2objekt</fi2scheme_name><fi2scheme_url>http://www.fi2.se/valuelist/VB001_005_001.xml</fi2scheme_url></fi2value_scheme><fi2value_value>2018-10-24T00:00:00.000</fi2value_value></fi2case_value><fi2case_descr lang="sv" usage="Description">Foobar</fi2case_descr><fi2case_descr lang="sv" usage="Comment">Vattenkranen i köket har börjat läcka vatten igår kväll</fi2case_descr><fi2case_registrationdate>2018-10-16</fi2case_registrationdate><fi2case_category><fi2class_code>Case</fi2class_code><fi2class_scheme><fi2scheme_id>Class_Fi2CaseCategoryType_01</fi2scheme_id><fi2scheme_name>Ärendetyp Felanmälningar</fi2scheme_name><fi2scheme_url>http://www.fastapi.se/lists/classlist/Class_Fi2CaseCategoryType_01.xml</fi2scheme_url></fi2class_scheme></fi2case_category><fi2case_status><fi2class_code>Pending</fi2class_code><fi2class_scheme><fi2scheme_id>Class_Fi2CaseStatus_01</fi2scheme_id><fi2scheme_name>Status Felanmälningar</fi2scheme_name><fi2scheme_url>http://www.fastapi.se/lists/classlist/Class_Fi2CaseStatus_01.xml</fi2scheme_url></fi2class_scheme></fi2case_status><fi2case_parentobject fi2item="fi2spatisystem"><fi2parent_ids><fi2_id>OBJ-11020301</fi2_id></fi2parent_ids></fi2case_parentobject></fi2case>`
      )
    })
  })

  describe('authorized routes', () => {
    afterEach(() => {
      jest.resetAllMocks()
    })

    it('GET /cases is protected', async () => {
      ;(client.get as jest.Mock).mockResolvedValueOnce(mockFi2cases)
      await verifyGetRouteIsProtected('/cases')
    })

    it('PUT /cases/:id is protected', async () => {
      ;(client.get as jest.Mock).mockResolvedValueOnce(mockFi2case)
      ;(client.put as jest.Mock).mockResolvedValueOnce(mockFi2case)
      await verifyPutRouteIsProtected('/cases/some_id/', {}, 200)
    })

    it('POST /cases/ is protected', async () => {
      ;(client.post as jest.Mock).mockResolvedValueOnce(mockFi2case)
      await verifyPostRouteIsProtected('/cases', { comment: 'Hello' }, 201)
    })
  })
})
