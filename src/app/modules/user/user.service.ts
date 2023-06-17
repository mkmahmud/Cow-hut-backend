import { IUser } from './user.interface'
import { User } from './user.model'

// Creating User
const createUser = async (data: IUser): Promise<IUser> => {
  if (data?.role === 'buyer') {
    data.income = 0
  } else if (data?.role === 'seller') {
    data.budget = 0
  }
  const newUser = await User.create(data)
  return newUser
}

// Getting Singel user
const getSingelUser = async (id: string): Promise<IUser | null> => {
  const result = await User.findById(id)
  return result
}
// Getting all users
const getAllUsers = async () => {
  const result = await User.find({})
  return result
}

// Update a singel user
const updateSingelUser = async (
  id: string,
  updatedData: Partial<IUser>
): Promise<IUser | null> => {
  const result = await User.findOneAndUpdate({ _id: id }, updatedData, {
    new: true,
  })
  return result
}

// Delete A Singel User
const deleteSingelUser = async (id: string) => {
  const result = await User.findByIdAndDelete(id)
  return result
}

export const userService = {
  createUser,
  getAllUsers,
  getSingelUser,
  updateSingelUser,
  deleteSingelUser,
}
