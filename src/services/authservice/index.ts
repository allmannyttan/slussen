import { Application, Request, Response } from 'express'
import asyncHandler from 'express-async-handler'
import hash from '@app/middleware/auth/hash'
import { createToken, authMiddleware } from '@app/middleware/auth/jwt'

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
   *            properties:
   *              passwordHash:
   *                type: string
   *              salt:
   *                type: string
   */
  app.get(
    '/auth/generate-password-hash',
    asyncHandler(async (req: Request, res: Response) => {
      const saltAndHash = await hash.createSaltAndHash(req.query.password)
      res.json(saltAndHash)
    })
  )

  /**
   * @swagger
   * /auth/generate-token:
   *  post:
   *    summary: Generates a jwt
   *    description: Validates username + password and returns a valid token to be used in authorization header.
   *    requestBody:
   *      required: true
   *      content:
   *        application/json:
   *          schema:
   *            type: object
   *            properties:
   *              username:
   *                type: string
   *              password:
   *                type: string
   *    responses:
   *      '200':
   *        description: 'A valid token'
   *        schema:
   *            type: object
   *            properties:
   *              token:
   *                type: string
   */
  app.post(
    '/auth/generate-token',
    asyncHandler(async (req: Request, res: Response) => {
      const { username, password } = req.body
      const token = await createToken(username, password)
      res.json(token)
    })
  )

  /**
   * @swagger
   * /auth/test:
   *  post:
   *    summary: Verifies a authorization token.
   *    parameters:
   *      - in: header
   *        name: authorization
   *        schema:
   *          type: string
   *        required: true
   *    responses:
   *      '200':
   *        description: 'Result of the validation.'
   *        schema:
   *          type: string
   */
  app.get('/auth/test', authMiddleware, (_req, res) => res.send('Authorization OK'))
}
