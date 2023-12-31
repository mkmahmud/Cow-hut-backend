import { IOptions, IOptionsResult } from '../constants/pagination'

const calculatePageination = (options: IOptions): IOptionsResult => {
  const page = Number(options.page || 1)
  const limit = Number(options.limit || 5)

  const skip = (page - 1) * limit

  const sortBy = options.sortBy || 'createdAt'
  const sortOrder = options.sortOrder || 'desc'

  return {
    page,
    limit,
    skip,
    sortBy,
    sortOrder,
  }
}

export const paginationHelpers = {
  calculatePageination,
}
