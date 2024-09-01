import { Heading } from '@/components/ui/Heading'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

import styles from './HeaderCart.module.scss'

export const HeaderCart = () => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant='ghost'>Корзина</Button>
			</SheetTrigger>
			<SheetContent>
				<Heading title='Корзина товаров' className='text-xl' />
			</SheetContent>
		</Sheet>
	)
}
