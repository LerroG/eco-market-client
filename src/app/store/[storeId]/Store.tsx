'use client'

import { Heading } from '@/components/ui/Heading'

import styles from './Store.module.scss'
import { MainStatistic } from './statistic/main-statistic/MainStatistic'
import { MiddleStatistic } from './statistic/middle-statistic/MiddleStatistic'

export const Store = () => {
	return (
		<div className={styles.wrapper}>
			<Heading title='Статистика' />
			<MainStatistic />
			<MiddleStatistic />
		</div>
	)
}
