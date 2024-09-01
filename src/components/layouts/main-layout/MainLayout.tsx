import type { PropsWithChildren } from 'react'

import styles from './MainLayout.module.scss'
import { Footer } from './footer/Footer'
import { Header } from './header/Header'

const MainLayout = ({ children }: PropsWithChildren<unknown>) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.layout}>
				<Header />
				<main>{children}</main>
				<Footer />
			</div>
		</div>
	)
}

export default MainLayout
