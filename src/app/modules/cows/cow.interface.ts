import { Model, Schema } from 'mongoose'
import { IUser } from '../user/user.interface'

export type ICowLocation =
  | 'Dhaka'
  | 'Chattogram'
  | 'Barishal'
  | 'Rajsahi'
  | 'Sylhet'
  | 'Comilla'
  | 'Rangpur'
  | 'Mymensingh'

export type ICowBreed =
  | 'Brahman'
  | 'Nellore'
  | 'Sahiwal'
  | 'Gir'
  | 'Indigenous'
  | 'Tharparkar'
  | 'Kankrej'

export type ICowLabel = 'for sale' | 'sold out'

export type ICowCategory = 'Dairy' | 'Beef' | 'DualPurpose'

export type ICow = {
  name: string
  age: number
  price: number
  location: ICowLocation
  breed: ICowBreed
  weight: number
  label: ICowLabel
  category: ICowCategory
  seller: Schema.Types.ObjectId | IUser
}

export type CowModel = Model<ICow>
