import { axiosWithAuth } from '@/api/api.interceptors'

import { API_URL } from '@/config/api.config'

import { IOrderCreate, IOrderResponse } from '@/shared/types/order.interface'

class OrderService {
	async place(data: IOrderCreate) {
		return axiosWithAuth<IOrderResponse>({
			url: API_URL.orders('/place'),
			method: 'POST',
			data
		})
	}

	async updateStatus(orderId: string) {
		return axiosWithAuth<IOrderResponse>({
			url: API_URL.orders(`/status/${orderId}`),
			method: 'PATCH'
		})
	}
}

export const orderService = new OrderService()
