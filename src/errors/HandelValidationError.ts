import mongoose from 'mongoose'

type IGenericHandlerMessage = {
  path: string | number
  message: string
}
type IGenericErrorResponse = {
  statusCode: number
  message: string
  errorMessage: IGenericHandlerMessage[]
}

const handelValiditionError = (
  err: mongoose.Error.ValidationError
): IGenericErrorResponse => {
  const errors: IGenericHandlerMessage[] = Object.values(err.errors).map(
    (el: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: el?.path,
        message: el?.message,
      }
    }
  )
  const statusCode = 400
  return {
    statusCode,
    message: 'Validition Error',
    errorMessage: errors,
  }
}

export default handelValiditionError
