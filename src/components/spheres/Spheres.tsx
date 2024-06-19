import FadeIn from '@/components/fadeIn/FadeIn'
import Link from 'next/link'

export const Spheres = () => {
	return (
		<FadeIn className='cont mb-60'>
			<div>
				<h5>Какие проблемы я решаю</h5>
			</div>
			<div className='m-auto grid lg:grid-cols-2 gap-4 rounded-box'>
				<Link className='card w-full shadow-xl rounded-3xl p-10' href='#'>
					<h2 className='card-title'>Семейные проблемы</h2>
					<div>Преодоление кризисов семейной жизни</div>
				</Link>
				<Link className='card w-full shadow-xl rounded-3xl p-10' href='/'>
					<h2 className='card-title'>Мотивация</h2>
					<div>
						Поиск изначального посыла деятельности и твердое понимание
						направления дальнейших усилий
					</div>
				</Link>
				<Link className='card w-full shadow-xl rounded-3xl p-10' href='/'>
					<h2 className='card-title'>Развитие личности</h2>
					<div>
						Практика осознанности, обучение сознательному контролю внутреннего
						состояния и принятия решений
					</div>
				</Link>
			</div>
		</FadeIn>
	)
}
