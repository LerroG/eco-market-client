'use client'

import { Trash } from 'lucide-react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Heading } from '@/components/ui/Heading'
import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import ConfirmModal from '@/components/ui/modals/ConfirmModal'
import { Textarea } from '@/components/ui/textarea'

import { useDeleteStore } from '@/hooks/queries/stores/useDeleteStore'
import { useUpdateStore } from '@/hooks/queries/stores/useUpdateStore'

import { IStoreUpdate } from '@/shared/types/store.interface'

import styles from '../Store.module.scss'

export const Settings = () => {
	const { store, updateStore, isLoadingUpdate } = useUpdateStore()
	const { deleteStore, isLoadingDelete } = useDeleteStore()

	const form = useForm<IStoreUpdate>({
		mode: 'onChange',
		values: {
			title: store?.title || '',
			description: store?.description || ''
		}
	})

	const onSubmit: SubmitHandler<IStoreUpdate> = data => {
		updateStore(data)
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<Heading title='Настройки' description='Управление магазином' />
				<ConfirmModal handleClick={() => deleteStore()}>
					<Button size='icon' variant='primary' disabled={isLoadingDelete}>
						<Trash className='size-4' />
					</Button>
				</ConfirmModal>
			</div>

			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<div className={styles.fields}>
						<FormField
							control={form.control}
							name='title'
							rules={{
								required: 'Название обязательно'
							}}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Название</FormLabel>
									<FormControl>
										<Input
											placeholder='Название магазина'
											disabled={isLoadingUpdate}
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<FormField
						control={form.control}
						name='description'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Описание</FormLabel>
								<FormControl>
									<Textarea
										placeholder='Описание магазина'
										disabled={isLoadingUpdate}
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button variant='primary' disabled={isLoadingUpdate}>
						Сохранить
					</Button>
				</form>
			</Form>
		</div>
	)
}
