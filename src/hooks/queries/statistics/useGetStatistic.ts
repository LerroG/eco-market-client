import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useMemo } from 'react'

import { statisticService } from '@/services/statistic.service'

export const useGetStatistic = () => {
	const params = useParams<{ storeId: string }>()

	const { data: main } = useQuery({
		queryKey: ['get main statistic'],
		queryFn: () => statisticService.getMain(params.storeId)
	})

	const { data: middle } = useQuery({
		queryKey: ['get middle statistic'],
		queryFn: () => statisticService.getMiddle(params.storeId)
	})

	return useMemo(() => ({ main, middle }), [main, middle])
}
