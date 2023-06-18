// eslint-disable-next-line @typescript-eslint/no-unused-vars
import express, { Application, NextFunction, Request, Response } from 'express'
const app: Application = express()
import cors from 'cors'
import errorHandler from './app/middlewares/globalErrorHandler'
import routes from './app/routes'
// import { MongoError } from 'mongodb'

// Cors
app.use(cors())

// Parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
  res.send('server is runing')
})

app.use('/api/v1', routes)

// Test Route
// app.get('/example', (req: Request, res: Response, next: NextFunction) => {
//   const duplicateError = new MongoError('Duplicate key error');
//   duplicateError.code = 11000;

//   throw duplicateError;
// })

// Global Error Handeler
app.use(errorHandler)

export default app
