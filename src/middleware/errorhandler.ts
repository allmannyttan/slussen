import { NextFunction, Request, Response } from 'express'
import HttpException from '@app/commonTypes/exceptions'

const errorMiddleware = (
  error: HttpException,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  console.error(error)

  const status = error.status || 500
  const message = error.message || 'Something went wrong'
  response.status(status).send({
    status,
    message,
  })
  next()
}

export default errorMiddleware
