import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { CreateCategory } from './CreateCategory'

export const metadata: Metadata = {
	title: 'Создание категорию',
	...NO_INDEX_PAGE
}

const CreateCategoryPage = () => {
	return <CreateCategory />
}

export default CreateCategoryPage
