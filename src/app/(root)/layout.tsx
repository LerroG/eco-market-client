import type { PropsWithChildren } from 'react'

import MainLayout from '@/components/layouts/main-layout/MainLayout'

const Layout = ({ children }: PropsWithChildren<unknown>) => {
	return <MainLayout>{children}</MainLayout>
}

export default Layout
