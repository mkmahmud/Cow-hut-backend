import { SortOrder } from 'mongoose'
import { ICow } from './cow.interface'
import { Cow } from './cow.model'
import { paginationHelpers } from '../../../helpers/paginationHelpers'

// Creating new cow
const createCow = async (cowData: ICow): Promise<ICow> => {
  const result = (await Cow.create(cowData)).populate('seller')
  return result
}

type IPageOptions = {
  page?: number
  limit?: number
  sortBy?: string
  sortOrder?: SortOrder
  minPrice?: number
  maxPrice?: number
  location?: string
  searchTerm?: string
}

type IGenericResponse<T> = {
  meta: {
    page: number
    limit: number
  }
  data: T
}

type ICowFilter = { searchTerm: string }

// Get All cows
const getAllCows = async (
  filters: ICowFilter,
  pageOptions: IPageOptions
): Promise<IGenericResponse<ICow[]>> => {
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePageination(pageOptions)

  const { searchTerm, ...filtersData } = filters
  const searchableFildes = ['location', 'breed', 'category']

  const andConditions = []

  if (searchTerm) {
    andConditions.push({
      $or: searchableFildes.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    })
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    })
  }

  const sortConditions: { [key: string]: SortOrder } = {}
  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder
  }

  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {}

  const result = await Cow.find(whereConditions)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit)

  return {
    meta: {
      page,
      limit,
    },
    data: result,
  }
}

// Get Singel Cow
const getSingelCow = async (id: string) => {
  const result = await Cow.findById(id)
  return result
}

// Update Singel User
const updateSingelCow = async (
  id: string,
  updatedData: Partial<ICow>
): Promise<ICow | null> => {
  const result = await Cow.findOneAndUpdate({ _id: id }, updatedData, {
    new: true,
  })
  return result
}

// Delete Singel User
const deleteSingelCow = async (id: string) => {
  const result = await Cow.findByIdAndDelete(id)
  return result
}

export const cowService = {
  createCow,
  getAllCows,
  getSingelCow,
  updateSingelCow,
  deleteSingelCow,
}
