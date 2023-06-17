import { NextFunction, Request, Response } from 'express'
import config from '../../config'
import handelValiditionError from '../../errors/HandelValidationError'
import handelCasrError from '../../errors/HandelCastError'
import ApiError from '../../errors/APIError'

type IGenericHandlerMessage = {
  path: string | number
  message: string
}

// Error handling middleware
const errorHandler = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) => {
  let statusCode = 500
  let message = 'Internal Server Error'
  let errorMessage: IGenericHandlerMessage[] = []

  // Check for specific error types

  if (error instanceof Error) {
    message = error?.message
    errorMessage = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : []
  } else if (error?.name === 'ValidationError') {
    const simplifiedError = handelValiditionError(error)
    statusCode = simplifiedError.statusCode
    message = simplifiedError.message
    errorMessage = simplifiedError.errorMessage
  } else if (error?.name === 'CastError') {
    const simplifiedError = handelCasrError(error)
    statusCode = simplifiedError.statusCode
    message = simplifiedError.message
    errorMessage = simplifiedError.errorMessage
  } else if (error instanceof ApiError) {
    statusCode = error?.statusCode
    message = error?.message
    errorMessage = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : []
  }

  // Send the error response
  res.status(statusCode).json({
    success: false,
    message,
    errorMessage,
    stack: config.env !== 'production' ? error?.stack : undefined,
  })
}

export default errorHandler
