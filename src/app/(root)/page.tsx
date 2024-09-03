import type { Metadata } from 'next'

import { productService } from '@/services/product.service'

import { Home } from './Home'

export const metadata: Metadata = {
	title: 'Ваш шопинг, ваше удовольствие - всё в одном месте!'
}

export const revalidate = 60

const getProducts = async () => {
	const data = (await productService.getMostPopular()).slice(0, 6)

	return data
}

const HomePage = async () => {
	const data = await getProducts()

	return <Home products={data} />
}

export default HomePage
