import mongoose from 'mongoose'
import { IOrder } from './order.interface'
import { Order } from './order.model'
import { Cow } from '../cows/cow.model'
import { User } from '../user/user.model'

const createNewOrder = async (orderData: IOrder): Promise<IOrder> => {
  let allData = null
  const session = await mongoose.startSession()

  try {
    session.startTransaction()

    // Update Label for sold out
    const updateCowData = {
      label: 'sold out',
    }

    const updateCow = await Cow.findOneAndUpdate(
      { _id: orderData.cow },
      updateCowData,
      { new: true, session }
    )
    const cowPrice = updateCow?.price ?? 0

    // update seller account income

    const seller = await User.findById({
      _id: updateCow?.seller ?? null,
    }).session(session)
    const updatedIncome = seller?.income ?? 0 + cowPrice
    await User.updateOne(
      { _id: updateCow?.seller },
      {
        income: updatedIncome,
      },
      {
        new: true,
        session,
      }
    )

    // Update Buyer Account budget

    const buyer = await User.findById({ _id: orderData.buyer ?? null }).session(
      session
    )
    const updatedBuyerIncome = buyer?.budget ?? 0 - cowPrice
    await User.updateOne(
      { _id: orderData.buyer },
      {
        budget: updatedBuyerIncome,
      },
      {
        new: true,
        session,
      }
    )

    const result = await Order.create([orderData], { session })

    allData = result[0]
    await session.commitTransaction()
    await session.endSession()
  } catch (error) {
    await session.abortTransaction()
    await session.endSession()
    throw error
  }
  return allData
}

const getOrders = async () => {
  const result = await Order.find()
  return result
}

export const orderService = {
  createNewOrder,
  getOrders,
}
