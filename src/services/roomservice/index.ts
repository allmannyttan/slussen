import { Application, Request, Response } from 'express'
import { client } from '@app/adapters/fastapiadapter'
import { authMiddleware } from '@app/middleware/auth'
import asyncHandler from 'express-async-handler'
import { Fi2Space, Fi2SpaceResponse, Room } from './types'

const transformSpace = (spaceData: Fi2Space): Room => {
  const room: Room = {
    id: spaceData.id,
    name: spaceData.fi2space_name.$t,
    description: spaceData.fi2space_descr.$t,
    shared: spaceData.fi2space_common || false,
  }
  return room
}

const VALID_SHARED_VALUES = ['true', 'false', undefined]

const getRooms = async (rentalId?: string, isShared?: string): Promise<Room[]> => {
  try {
    const filters = []
    if (rentalId)
      filters.push(`fi2space_parentobject@fi2spatisystem.fi2parent_ids.fi2_id:'${rentalId}'`)
    if (isShared) filters.push(`fi2space_common:'${isShared}'`)
    const filterString = filters.length === 0 ? '' : `?filter=${filters.join(';')}`

    const response: Fi2SpaceResponse = await client.get({
      url: `fi2space/${filterString}`,
    })
    if (!response.fi2simplemessage) {
      return []
    }

    const arrResponse = Array.isArray(response.fi2simplemessage.fi2space)
      ? response.fi2simplemessage.fi2space
      : response.fi2simplemessage.fi2space
      ? [response.fi2simplemessage.fi2space]
      : []

    const result = arrResponse.map(transformSpace)
    return result
  } catch (err) {
    throw new Error(err as string)
  }
}

export const routes = (app: Application) => {
  app.get(
    '/rooms',
    authMiddleware,
    asyncHandler(async (req: Request, res: Response) => {
      if (req.query.isShared && !VALID_SHARED_VALUES.includes(req.query.isShared as string)) {
        return res.status(400).json({ message: 'Bad request' })
      }
      return res.json(await getRooms(req.query.rentalId as string, req.query.isShared as string))
    })
  )
}

export default {
  getRooms,
}
