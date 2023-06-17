import { Schema, model } from 'mongoose'
import { IOrder, orderModel } from './order.interface'

const orderSchema = new Schema<IOrder>(
  {
    cow: {
      type: Schema.Types.ObjectId,
      ref: 'cow',
      required: true,
    },
    buyer: {
      type: Schema.Types.ObjectId,
      ref: 'buyer',
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
)

export const Order = model<IOrder, orderModel>('orders', orderSchema)
