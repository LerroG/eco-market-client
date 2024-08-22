import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { ColorEdit } from './ColorEdit'

export const metadata: Metadata = {
	title: 'Настройки цвета',
	...NO_INDEX_PAGE
}

const ColorEditPage = () => {
	return <ColorEdit />
}

export default ColorEditPage
