import { NextFunction, Request, Response } from 'express'
import config from '../../config'

type IGenericHandlerMessage = {
  path: string | number
  message: string
}

// Error handling middleware
const errorHandler = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  err: any,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) => {
  const statusCode = 500
  let message = 'Internal Server Error'
  let errorMessage: IGenericHandlerMessage[] = []

  // Check for specific error types

  if (err instanceof Error) {
    message = err?.message
    errorMessage = err?.message
      ? [
          {
            path: '',
            message: err?.message,
          },
        ]
      : []
  }

  // Send the error response
  res.status(statusCode).json({
    success: false,
    message,
    errorMessage,
    stack: config.env !== 'production' ? err?.stack : undefined,
  })
}

export default errorHandler
