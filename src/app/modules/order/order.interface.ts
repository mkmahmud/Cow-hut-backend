import { Model, Schema } from 'mongoose'

export type IOrder = {
  cow: Schema.Types.ObjectId
  buyer: Schema.Types.ObjectId
}

export type orderModel = Model<IOrder>
