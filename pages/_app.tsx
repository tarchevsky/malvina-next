import '@/assets/styles/globals.css'
import '@/assets/styles/swiper.css'
import type { AppProps } from 'next/app'
import Layout from '@/layout/Layout'
import { AnimatePresence } from 'framer-motion'
import PageTransition from '@/components/pageTransition/PageTransition'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps, router }: AppProps) {
	const [isClient, setIsClient] = useState(false)

	useEffect(() => {
		setIsClient(true)
	}, [])

	if (!isClient) {
		return null // Или можно вернуть загрузочный экран, пока клиент не инициализирован
	}

	return (
		<AnimatePresence>
			<PageTransition key={router.route}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</PageTransition>
		</AnimatePresence>
	)
}
