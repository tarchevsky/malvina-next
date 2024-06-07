import Link from 'next/link'

const Footer = () => {
	return (
		<>
			<footer className='footer cont bg-base-200 text-base-content mt-80 py-10'>
				<aside>
					<div className='font-bold text-2xl'>Психолог Мальвина</div>
					<div>2024, Москва</div>
				</aside>
				<nav>
					<div className='text-sm font-bold'>О психологии</div>
					<Link href='/' className='link link-hover'>
						Что такое КПТ
					</Link>
					<Link href='/' className='link link-hover'>
						Психолог или психотерапевт
					</Link>
					<Link href='/' className='link link-hover'>
						Как найти специалиста
					</Link>
					<Link href='/' className='link link-hover'>
						Когда надо идти к психологу
					</Link>
				</nav>
				<nav>
					<div className='text-sm font-bold'>О терапии</div>
					<Link href='/' className='link link-hover'>
						КПТ или гештальт
					</Link>
					<Link href='/' className='link link-hover'>
						Терапия или рефлексия
					</Link>
					<Link href='/' className='link link-hover'>
						Заканчивай терапию
					</Link>
					<Link href='/' className='link link-hover'>
						Тебе не нужен терапевт
					</Link>
				</nav>
				<nav>
					<div className='text-sm font-bold'>Статьи о саморазвитии</div>
					<Link href='/' className='link link-hover'>
						Мотивация или долг
					</Link>
					<Link href='/' className='link link-hover'>
						Саморазвитие или прокрастинация
					</Link>
					<Link href='/' className='link link-hover'>
						Отдохни от развития
					</Link>
				</nav>
			</footer>
		</>
	)
}

export default Footer
