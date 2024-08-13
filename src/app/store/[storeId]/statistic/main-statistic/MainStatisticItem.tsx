import CountUp from 'react-countup'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { IMainStatistic } from '@/shared/types/statistic.interface'

import { formatPrice } from '@/utils/string/formatPrice'

import styles from './MainStatistic.module.scss'
import { getIcon } from './statistic.util'

interface MainStatisticItemProps {
	item: IMainStatistic
}

export const MainStatisticItem = ({ item }: MainStatisticItemProps) => {
	const Icon = getIcon(item.id)

	return (
		<Card className={styles.card}>
			<CardHeader className={styles.header}>
				<CardTitle>{item.name}</CardTitle>
				<Icon />
			</CardHeader>
			<CardContent className={styles.content}>
				<h2>
					{item.id !== 1 ? (
						<CountUp end={item.value} />
					) : (
						<CountUp end={item.value} formattingFn={formatPrice} />
					)}
				</h2>
			</CardContent>
		</Card>
	)
}
