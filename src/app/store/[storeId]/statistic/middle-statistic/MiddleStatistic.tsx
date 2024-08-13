import { useGetStatistic } from '@/hooks/queries/statistics/useGetStatistic'

import { LastUsers } from './LastUsers'
import styles from './MiddleStatistic.module.scss'
import { Overview } from './Overview'

export const MiddleStatistic = () => {
	const { middle } = useGetStatistic()

	return (
		<div className={styles.middle}>
			{middle?.monthlySales.length || middle?.lastUsers.length ? (
				<>
					<div className={styles.overview}>
						<Overview data={middle.monthlySales} />
					</div>
					<div className={styles.last_users}>
						<LastUsers data={middle.lastUsers} />
					</div>
				</>
			) : (
				<div>Нет данных для статистики</div>
			)}
		</div>
	)
}
