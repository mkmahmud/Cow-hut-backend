import { NextFunction, Request, Response } from 'express'
import { userService } from './user.service'
import { StatusCodes } from 'http-status-codes'
import sendResponse from '../../../shared/sendResponse'

// Creating new User
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { ...user } = req.body
    const result = await userService.createUser(user)

    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: 'User created Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

// Get Singel User
const getSingelUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id
    const result = await userService.getSingelUser(id)

    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: 'User retrieved successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

// Getting All Users Data
const getAllUsers = async (req: Request, res: Response) => {
  const result = await userService.getAllUsers()

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Users retrieved successfully',
    data: result,
  })
}

// Update A Singel User
const updateSingelUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id
    const updatedData = req.body

    const result = await userService.updateSingelUser(id, updatedData)
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: 'User updated  successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

// Delete A Singel User

const deleteSingelUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id

    const result = await userService.deleteSingelUser(id)
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: 'User deleted successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const userController = {
  createUser,
  getAllUsers,
  getSingelUser,
  updateSingelUser,
  deleteSingelUser,
}
