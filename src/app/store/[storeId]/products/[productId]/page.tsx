import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { ProductEdit } from './ProductEdit'

export const metadata: Metadata = {
	title: 'Настройки товара',
	...NO_INDEX_PAGE
}

const ProductEditPage = () => {
	return <ProductEdit />
}

export default ProductEditPage
