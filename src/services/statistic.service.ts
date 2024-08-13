import { axiosWithAuth } from '@/api/api.interceptors'

import { API_URL } from '@/config/api.config'

import {
	IMainStatistic,
	IMiddleStatistic
} from '@/shared/types/statistic.interface'

class StatisticService {
	async getMain(storeId: string) {
		const { data } = await axiosWithAuth<IMainStatistic[]>({
			url: API_URL.statistics(`/main/${storeId}`),
			method: 'GET'
		})

		return data
	}

	async getMiddle(storeId: string) {
		const { data } = await axiosWithAuth<IMiddleStatistic[]>({
			url: API_URL.statistics(`/middle/${storeId}`),
			method: 'GET'
		})

		return data
	}
}

export const statisticService = new StatisticService()
