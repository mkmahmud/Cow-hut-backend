import { NextFunction, Request, Response } from 'express'
import { orderService } from './order.service'

const createOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = req.body
    const result = await orderService.createNewOrder(data)

    res.status(200).json({
      statusCode: 200,
      success: true,
      message: 'Order made successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const orderController = {
  createOrder,
}
