import { Loader } from '../Loader'
import { Card, CardContent } from '../card'
import { Skeleton } from '../skeleton'

import styles from './DataTable.module.scss'

export const DataTableLoading = () => {
	return (
		<div className={styles.loading}>
			<Skeleton className={styles.headeing} />
			<Skeleton className={styles.search} />

			<Card className={styles.table}>
				<CardContent>
					<div className={styles.loader_wrapper}>
						<Loader />
					</div>
				</CardContent>
			</Card>
		</div>
	)
}
