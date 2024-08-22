import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { CategoryEdit } from './CategoryEdit'

export const metadata: Metadata = {
	title: 'Настройки категории',
	...NO_INDEX_PAGE
}

const CategoryEditPage = () => {
	return <CategoryEdit />
}

export default CategoryEditPage
