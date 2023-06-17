import { IOrder } from './order.interface'
import { Order } from './order.model'

const createNewOrder = async (orderData: IOrder): Promise<IOrder> => {
  const result = await Order.create(orderData)
  return result
}

export const orderService = {
  createNewOrder,
}
