import { ICategory } from './category.interface'
import { IColor } from './color.interface'
import { IReview } from './review.interface'
import { IStore } from './store.interface'

export interface IProduct {
	id: string
	title: string
	description: string
	price: string
	images: string
	category: ICategory
	reviews: IReview[]
	color: IColor
	store: IStore
}

export interface IProductInput
	extends Omit<IProduct, 'id' | 'category' | 'reviews' | 'color' | 'store'> {
	categoryId: string
	colorId: string
}
