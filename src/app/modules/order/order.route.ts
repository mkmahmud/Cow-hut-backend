import express from 'express'
import { orderController } from './order.controller'

const router = express.Router()

// Create Cow
router.post('/', orderController.createOrder)

export const ordersRoutes = router
