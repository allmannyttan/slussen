import { fi2SpacesJson } from '../__fixtures__/fastAPIAdapterResult.fixture'
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

describe('#roomservice', () => {
  beforeEach(() => {
    console.log = jest.fn()
    console.error = jest.fn()

    jest.resetAllMocks()
    ;(helper.getNameFromClasslist as jest.Mock).mockReturnValue('mocked')
  })

  describe('#getRooms', () => {
    test('uses fast api adapter to get rooms', async () => {
      ;(client.get as jest.Mock).mockResolvedValueOnce(fi2SpacesJson)

      await service.getRooms()

      expect(client.get).toHaveBeenCalledTimes(1)
      expect(client.get).toHaveBeenCalledWith({ url: 'fi2space/' })
    })

    test('adds room id as filter query parameter', async () => {
      ;(client.get as jest.Mock).mockResolvedValueOnce(fi2SpacesJson)
      const rentalId = 'OBJ-1337'

      await service.getRooms(rentalId)

      expect(client.get).toHaveBeenCalledTimes(1)
      expect(client.get).toHaveBeenCalledWith({
        url: `fi2space/?filter=fi2space_parentobject@fi2spatisystem.fi2parent_ids.fi2_id:'${rentalId}'`,
      })
    })

    test('adds isShared as filter query parameter', async () => {
      ;(client.get as jest.Mock).mockResolvedValueOnce(fi2SpacesJson)
      const isShared = 'true'
      await service.getRooms('', isShared)

      expect(client.get).toHaveBeenCalledTimes(1)
      expect(client.get).toHaveBeenCalledWith({
        url: `fi2space/?filter=fi2space_common:'${isShared}'`,
      })
    })

    test('adds room id and isShared as filter query parameter', async () => {
      ;(client.get as jest.Mock).mockResolvedValueOnce(fi2SpacesJson)
      const isShared = 'true'
      const rentalId = 'OBJ-1337'
      await service.getRooms(rentalId, isShared)

      expect(client.get).toHaveBeenCalledTimes(1)
      expect(client.get).toHaveBeenCalledWith({
        url: `fi2space/?filter=fi2space_parentobject@fi2spatisystem.fi2parent_ids.fi2_id:'${rentalId}';fi2space_common:'${isShared}'`,
      })
    })

    test('throws error if client rejects', async () => {
      ;(client.get as jest.Mock).mockRejectedValueOnce('error')

      try {
        await service.getRooms()
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
      ;(client.get as jest.Mock).mockResolvedValueOnce(fi2SpacesJson)
      await verifyGetRouteIsProtected('/rentals')
    })
  })
})
