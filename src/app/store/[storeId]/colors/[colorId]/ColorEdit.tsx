'use client'

import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'

import { useGetCategories } from '@/hooks/queries/categories/useGetCategories'
import { useGetColors } from '@/hooks/queries/colors/useGetColors'

import { colorService } from '@/services/color.service'

import { ColorForm } from '../ColorForm'

export const ColorEdit = () => {
	const params = useParams<{ colorId: string }>()

	const { data } = useQuery({
		queryKey: ['get color'],
		queryFn: () => colorService.getById(params.colorId)
	})

	return <ColorForm color={data} />
}
