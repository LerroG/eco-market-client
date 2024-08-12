import { Logo } from '../../main-layout/header/logo/Logo'

import { Navigation } from './navigation/Navigation'

import styles from './Sidebar.module.scss'

export const Sidebar = () => {
	return (
		<div className={styles.sidebar}>
			<Logo />
			<Navigation />
		</div>
	)
}
