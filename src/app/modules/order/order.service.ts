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
      { new: true }
    )
    const cowPrice = updateCow?.price

    // update seller account income

    const seller = await User.findById({ _id: updateCow?.seller })
    const updatedIncome = seller?.income + cowPrice
    await User.updateOne(
      { _id: updateCow?.seller },
      {
        income: updatedIncome,
      },
      {
        new: true,
      }
    )

    // Update Buyer Account budget

    const buyer = await User.findById({ _id: orderData.buyer })
    const updatedBuyerIncome = buyer?.budget - cowPrice
    await User.updateOne(
      { _id: orderData.buyer },
      {
        budget: updatedBuyerIncome,
      },
      {
        new: true,
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

export const orderService = {
  createNewOrder,
}
