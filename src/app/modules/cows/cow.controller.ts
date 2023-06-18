import { NextFunction, Request, Response } from 'express'
import { cowService } from './cow.service'
import { User } from '../user/user.model'
import paginationPick from '../../../shared/paginationPick'

// Creating cow
const createCow = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const cowdata = req.body

    // check valid user or not
    const sellerId = cowdata?.seller
    const getUser = await User.findById(sellerId)

    if (getUser?.role === 'seller') {
      const result = await cowService.createCow(cowdata)

      res.status(200).json({
        statusCode: 200,
        success: true,
        message: 'Cow created successfully',
        data: result,
      })
    } else {
      res.status(400).json({
        statusCode: 400,
        success: false,
        message: 'Your are not seller So you can not create cow',
      })
    }
  } catch (error) {
    next(error)
  }
}

// Get All Cows

type ICowFilter = {
  searchTerm: string
  minPrice: string
  maxPrice: string
  location: string
}

const pageinationProperty = ['page', 'limit', 'sortBy', 'sortOrder']
const getAllCows = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const searchTerm = paginationPick(req.query, ['searchTerm', 'location'])

    const minAndMax = paginationPick(req.query, ['minPrice', 'maxPrice'])

    const paginationObject = paginationPick(req.query, pageinationProperty)

    const result = await cowService.getAllCows(
      searchTerm as ICowFilter,
      paginationObject,
      minAndMax
    )

    res.status(200).json({
      statusCode: 200,
      success: true,
      message: 'Cows retrieved  successfully',
      meta: result.meta,
      data: result.data,
    })
  } catch (error) {
    next(error)
  }
}

// Get Singel Cow
const getSingelCow = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id
    const result = await cowService.getSingelCow(id)

    res.status(200).json({
      statusCode: 200,
      success: true,
      message: 'Cow retrieved successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

// Update A Singel Cow
const updateSingelCow = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id
    const updatedData = req.body

    const result = await cowService.updateSingelCow(id, updatedData)
    res.status(200).json({
      statusCode: 200,
      success: true,
      message: 'Cow updated  successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

// Delete Cow
const deleteSingelCow = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id

    const result = await cowService.deleteSingelCow(id)
    res.status(200).json({
      statusCode: 200,
      success: true,
      message: 'User deleted successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const cowController = {
  createCow,
  getAllCows,
  getSingelCow,
  updateSingelCow,
  deleteSingelCow,
}
