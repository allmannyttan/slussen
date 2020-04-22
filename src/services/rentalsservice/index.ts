import { Application, Request, Response } from 'express'
import { client } from './adapter'
import {
    Rental,
  } from './types'


const getRentals = async (): Promise<Rental[]> => {
    const rentals: Fi2LeaseRentalsResponse = await client.get(`fi2spatisystem/`)

}

export const routes = (app: Application) => {
    app.get('/rentals', async (_req: Request, res: Response) =>
      res.json(await getRentals())
    )
    app.get('/rentals/:id', async (_req: Request, res: Response) =>
      res.json(await getRental(_req.params.id))
    )
  }
