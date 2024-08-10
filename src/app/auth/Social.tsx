'use client'

import { useRouter } from 'next/navigation'
import { FcGoogle } from 'react-icons/fc'

import { Button } from '@/components/ui/button'

import { SERVER_URL } from '@/config/api.config'

import styles from './Auth.module.scss'

export const Social = () => {
	const router = useRouter()

	return (
		<div className={styles.social}>
			<Button
				variant='outline'
				onClick={() => router.push(`${SERVER_URL}/auth/google`)}
			>
				<FcGoogle />
				Продолжить через Google
			</Button>
		</div>
	)
}
