import FadeIn from '@/components/fadeIn/FadeIn'

export const Timeline = () => {
	return (
		<FadeIn className='cont mb-60'>
			<div>
				<h3 className='mb-14'>Я гарантирую</h3>
				<ul className='timeline timeline-vertical'>
					<li>
						<hr />
						<FadeIn
							delay={0.5}
							className='timeline-start timeline-box lg:tooltip'
							data-tip='Ваш выбор - делиться своими данными или нет. Принцип терапии - анонимность и личный коморфт и успехи клиента'
						>
							Анонимность
						</FadeIn>
						<hr />
					</li>
					<li>
						<hr />
						<FadeIn
							delay={1.5}
							className='timeline-end timeline-box lg:tooltip'
							data-tip='Терапия зиждется на обоюдном доверии'
						>
							Доверие
						</FadeIn>
						<hr />
					</li>
					<li>
						<hr />
						<FadeIn
							delay={2}
							className='timeline-start timeline-box lg:tooltip'
							data-tip='На разных этапах работы сессии могут быть разного формата. Установочные призваны определить глубину запроса и выстроить план. Дальше двигаемся по намеченному пути'
						>
							Безоценочность
						</FadeIn>
						<hr />
					</li>
				</ul>
				<p className='mt-40'>
					Общение с психологом - это работа главным образом над собой. Если вы
					хотите добиться успеха - выполняйте рекомендации специалиста, и вы
					сделаете свою жизнь лучше
				</p>
			</div>
		</FadeIn>
	)
}
