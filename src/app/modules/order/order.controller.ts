import { NextFunction, Request, Response } from 'express'
import { orderService } from './order.service'
import { Cow } from '../cows/cow.model'
import { User } from '../user/user.model'
import sendResponse from '../../../shared/sendResponse'
import { StatusCodes } from 'http-status-codes'

const createOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = req.body

    // Get cow details
    const cowDetails = await Cow.findById(data.cow)

    const buyerDetails = await User.findById(data.buyer)

    if (buyerDetails && cowDetails && buyerDetails.budget >= cowDetails.price) {
      const result = await orderService.createNewOrder(data)

      sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Order made successfully',
        data: result,
      })
    } else {
      sendResponse(res, {
        statusCode: StatusCodes.BAD_REQUEST,
        success: false,
        message: 'Your dont have enough money',
      })
    }
  } catch (error) {
    next(error)
  }
}

const getOrders = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await orderService.getOrders()

    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: 'Orders Data Retived succesfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const orderController = {
  createOrder,
  getOrders,
}
