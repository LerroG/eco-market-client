import { IUser } from './user.interface'

export interface IOrderResponse {
	id: string
	createdAt: string
	items: IOrderItem[]
	status: EnumOrderStatus
	user: IUser
	total: number
}

export interface IOrderCreate {
	status?: EnumOrderStatus
	items: IOrderItem[]
}

export interface IOrderItem {
	quantity: number
	price: number
	productId: string
	storeId: string
}

export enum EnumOrderStatus {
	PENDING = 'PENDING',
	PAYED = 'PAYED'
}
