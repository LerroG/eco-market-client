import type { Metadata } from 'next'

import { Home } from './Home'

export const metadata: Metadata = {
	title: 'Ваш шопинг, ваше удовольствие - всё в одном месте!'
}
const HomePage = () => {
	return <Home />
}

export default HomePage
