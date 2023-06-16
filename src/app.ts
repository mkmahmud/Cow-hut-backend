import express, { Application, NextFunction, Request, Response } from 'express'
const app: Application = express()
import cors from 'cors'
import errorHandler from './app/middlewares/globalErrorHandler'

// Cors
app.use(cors())

// Parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
  res.send('server is runing')
})

app.get('/example', (req: Request, res: Response, next: NextFunction) => {
  next('My error')
})

// Global Error Handeler
app.use(errorHandler)

export default app
