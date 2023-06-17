import { NextFunction, Request, Response } from 'express'
import { orderService } from './order.service'
import { Cow } from '../cows/cow.model'
import { User } from '../user/user.model'

const createOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = req.body

    // Get cow details
    const cowDetails = await Cow.findById(data.cow)

    const buyerDetails = await User.findById(data.buyer)

    if (buyerDetails && cowDetails && buyerDetails.budget >= cowDetails.price) {
      const result = await orderService.createNewOrder(data)
      res.status(200).json({
        statusCode: 200,
        success: true,
        message: 'Order made successfully',
        data: result,
      })
    } else {
      res.status(404).json({
        statusCode: 404,
        success: false,
        message: 'Your dont have enough money',
      })
    }
  } catch (error) {
    next(error)
  }
}

export const orderController = {
  createOrder,
}
