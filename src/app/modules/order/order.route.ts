import express from 'express'
import { orderController } from './order.controller'

const router = express.Router()

// Create Cow
router.post('/', orderController.createOrder)

// Get All Orders
router.get('/', orderController.getOrders)

export const ordersRoutes = router
