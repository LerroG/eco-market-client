import { IUser } from './user.interface'

export interface IMainStatistic {
	id: number
	name: string
	value: number
}

export interface IMonthlySales {
	date: string
	value: number
}

export interface ILastUsers
	extends Omit<IUser, 'favorites' | 'order' | 'stores'> {
	total: number
}

export interface IMiddleStatistic {
	monthlySales: IMonthlySales[]
	lastUsers: ILastUsers[]
}
