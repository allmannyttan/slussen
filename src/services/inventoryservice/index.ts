import { Application, Request, Response } from 'express'
import { client } from '@app/adapters/fastapiadapter'
import { authMiddleware } from '@app/middleware/auth'
import asyncHandler from 'express-async-handler'
import { Fi2Equipment, Fi2EquipmentResponse, Inventory, InventoryClassification } from './types'

const transformEquipment = (equipmentData: Fi2Equipment): Inventory => {
  const transformKey = (k: string): string => 'i' + k.replace('.', '')
  const classCode = equipmentData.fi2equipment_class.fi2class_code as string
  const inventory: Inventory = {
    id: equipmentData.id,
    description: equipmentData.fi2equipment_comment || '',
    class: {
      code: classCode,
      name: InventoryClassification[transformKey(classCode)],
    },
    type: equipmentData.fi2equipment_type || '',
    manufacturer: equipmentData.fi2equipment_manufacture || '',
  }
  return inventory
}

const getInventory = async (spaceId?: string): Promise<Inventory[]> => {
  try {
    const filter = spaceId
      ? `?filter=fi2equipment_parentobject@fi2space.fi2parent_ids.fi2_id:'${spaceId}'&limit=999`
      : ''
    const response: Fi2EquipmentResponse = await client.get({
      url: `fi2equipment/${filter}`,
    })
    if (!response.fi2simplemessage) {
      return []
    }

    const arrResponse = Array.isArray(response.fi2simplemessage.fi2equipment)
      ? response.fi2simplemessage.fi2equipment
      : response.fi2simplemessage.fi2equipment
      ? [response.fi2simplemessage.fi2equipment]
      : []

    const result = arrResponse.map(transformEquipment)
    return result
  } catch (err) {
    throw new Error(err as string)
  }
}

export const routes = (app: Application) => {
  app.get(
    '/inventory',
    authMiddleware,
    asyncHandler(async (req: Request, res: Response) =>
      res.json(await getInventory(req.query.roomId as string))
    )
  )
}

export default {
  getInventory,
}
