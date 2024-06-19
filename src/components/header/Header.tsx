import Link from 'next/link'
import cn from 'clsx'
import styles from './Header.module.scss'
import Burger from '@/components/burger/Burger'
import { useEffect, useState } from 'react'
import ThemeToggle from '@/components/themeToggle/ThemeToggle'

const Header = () => {
	const [isMenuActive, setIsMenuActive] = useState(false)
	const toggleMenu = () => {
		setIsMenuActive(!isMenuActive)
	}

	useEffect(() => {
		if (isMenuActive) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'unset'
		}
	}, [isMenuActive])

	return (
		<header className='cont flex items-center justify-between m-auto m-4 md:flex md:justify-between align-center py-2'>
			<Link
				className='flex justify-center items-center md:justify-start py-4'
				href='/'
			>
				Мальвина
				<br />
				Психолог
			</Link>
			<div className='flex justify-evenly md:justify-between items-center py-4'>
				<nav
					className={cn(
						{ [styles.active]: isMenuActive },
						'fixed md:static z-10 w-full h-full md:w-auto md:h-auto end-0 bottom-0 -translate-y-full md:translate-y-0 opacity-0 md:opacity-100 transition-all duration-300 ease-out'
					)}
				>
					<ul
						tabIndex={0}
						className='absolute md:static menu flex-nowrap gap-6 md:menu-horizontal start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:translate-y-0 md:translate-x-0'
					>
						<li
							className={cn(
								styles.item,
								'block text-center opacity-0 md:opacity-100'
							)}
						>
							<Link className='px-[10px] btn btn-ghost font-normal' href='/'>
								Главная
							</Link>
						</li>
						<li
							className={cn(
								styles.item,
								'block text-center opacity-0 md:opacity-100'
							)}
						>
							<Link
								className='px-[10px] btn btn-ghost font-normal'
								href='/about'
							>
								Обо мне
							</Link>
						</li>
						<li
							className={cn(
								styles.item,
								'block text-center opacity-0 md:opacity-100'
							)}
						>
							<Link
								className='px-[10px] btn btn-ghost font-normal'
								href='/blog'
							>
								Блог
							</Link>
						</li>
						<li
							className={cn(
								styles.item,
								'block text-center opacity-0 md:opacity-100'
							)}
						>
							<Link
								className='px-[10px] btn btn-ghost font-normal'
								href='/methodology'
							>
								Методология
							</Link>
						</li>
						<li
							className={cn(
								styles.item,
								'block text-center opacity-0 md:opacity-100'
							)}
						>
							<Link
								className='px-[10px] btn btn-ghost font-normal'
								href='/contacts'
							>
								Контакты
							</Link>
						</li>
						{/*<Search placeholder='Поиск' />*/}
						<ThemeToggle className='md:m-auto' />
					</ul>
				</nav>
			</div>
			<Burger toggleMenu={toggleMenu} />
		</header>
	)
}

export default Header
