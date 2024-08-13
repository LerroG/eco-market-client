import { useGetStatistic } from '@/hooks/queries/statistics/useGetStatistic'

import styles from './MainStatistic.module.scss'
import { MainStatisticItem } from './MainStatisticItem'

export const MainStatistic = () => {
	const { main } = useGetStatistic()

	return (
		<div className={styles.main}>
			{main?.length ? (
				main.map(item => <MainStatisticItem key={item.id} item={item} />)
			) : (
				<div>Нет данных для статистики</div>
			)}
		</div>
	)
}
