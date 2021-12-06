import { fi2EquipmentsJson } from '../__fixtures__/fastAPIAdapterResult.fixture'
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

describe('#inventoryservice', () => {
  beforeEach(() => {
    console.log = jest.fn()
    console.error = jest.fn()

    jest.resetAllMocks()
    ;(helper.getNameFromClasslist as jest.Mock).mockReturnValue('mocked')
  })

  describe('#getInventory', async () => {
    test('uses fast api adapter to get inventory', async () => {
      ;(client.get as jest.Mock).mockResolvedValueOnce(fi2EquipmentsJson)

      await service.getInventory()

      expect(client.get).toHaveBeenCalledTimes(1)
      expect(client.get).toHaveBeenCalledWith({ url: 'fi2equipment/' })
    })

    test('adds room id as filter query parameter', async () => {
      ;(client.get as jest.Mock).mockResolvedValueOnce(fi2EquipmentsJson)
      const spaceId = 'OBJ-1337'

      await service.getInventory(spaceId)

      expect(client.get).toHaveBeenCalledTimes(1)
      expect(client.get).toHaveBeenCalledWith({
        url: `fi2equipment/?filter=fi2equipment_parentobject@fi2space.fi2parent_ids.fi2_id:'${spaceId}'&limit=999`,
      })
    })

    test('throws error if client rejects', async () => {
      ;(client.get as jest.Mock).mockRejectedValueOnce('error')

      try {
        await service.getInventory()
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

    test('GET /rooms is protected', async () => {
      ;(client.get as jest.Mock).mockResolvedValueOnce(fi2EquipmentsJson)
      await verifyGetRouteIsProtected('/rentals')
    })
  })
})
