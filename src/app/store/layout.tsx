import type { PropsWithChildren } from 'react'

import StoreLayout from '@/components/layouts/store-layout/StoreLayout'

const Layout = ({ children }: PropsWithChildren<unknown>) => {
	return <StoreLayout>{children}</StoreLayout>
}

export default Layout
