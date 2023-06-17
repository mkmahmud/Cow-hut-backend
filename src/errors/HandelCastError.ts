import mongoose from 'mongoose'
type IGenericHandlerMessage = {
  path: string | number
  message: string
}

const handelCasrError = (error: mongoose.Error.CastError) => {
  const errors: IGenericHandlerMessage[] = [
    {
      path: error.path,
      message: 'Invalid Id',
    },
  ]

  const statusCode = 400
  return {
    statusCode,
    message: 'Validition Error',
    errorMessage: errors,
  }
}

export default handelCasrError
