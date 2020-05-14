import { Application, Request, Response } from 'express'
import asyncHandler from 'express-async-handler'
import hash from '@app/middleware/auth/hash'

export const routes = (app: Application) => {
  /**
   * @swagger
   * /auth/generate-password-hash:
   *  get:
   *    summary: Generates a salt and hashes the given password using that salt.
   *    description: Generates a salt and hashes the given password using that salt. Pass cleartext password as query parameter.
   *    parameters:
   *      - in: query
   *        name: password
   *        required: true
   *        type: string
   *        description: The cleartext password that should be hashed
   *    responses:
   *      '200':
   *        description: 'Hashed password and salt'
   *        schema:
   *            type: object
   *
   */
  app.get(
    '/auth/generate-password-hash',
    asyncHandler(async (req: Request, res: Response) => {
      console.log(req)
      const saltAndHash = await hash.createSaltAndHash(req.query.password)
      res.json(saltAndHash)
    })
  )
}
