import FadeIn from '@/components/fadeIn/FadeIn'

export const Timeline = () => {
	return (
		<FadeIn className='cont mb-60'>
			<div>
				<h3>Алгоритм роста (можно ещё получения поддержки)</h3>
				<ul className='timeline timeline-vertical'>
					<li>
						<div
							className='timeline-start timeline-box lg:tooltip'
							data-tip='Вы звоните и за 45 минут мы выясняем Ваши потребности и боли, к концу диалога вы обладаете первым раздаточным материалом и пониманием своего дальнейшего пути в терапии.'
						>
							Стартовая консультация
						</div>
						<hr />
					</li>
					<li>
						<hr />
						<div
							className='timeline-end timeline-box lg:tooltip'
							data-tip='С пониманием дальнейшего пути Вы обращаетесь за консультацией и мы выбираем удобное время и обсуждаем формат общения'
						>
							Запись
						</div>
						<hr />
					</li>
					<li>
						<hr />
						<div
							className='timeline-start timeline-box lg:tooltip'
							data-tip='На разных этапах работы сессии могут быть разного формата. Установочные призваны определить глубину запроса и выстроить план. Дальше двигаемся по намеченному пути'
						>
							Сессия
						</div>
						<hr />
					</li>
					<li>
						<hr />
						<div
							className='timeline-end timeline-box lg:tooltip'
							data-tip='Обязательная часть работы. Без неё невозможно дальнейшее продвижение по курсу, наше общение завязано на совместных усилиях'
						>
							Домашнее задание
						</div>
						<hr />
					</li>
					<li>
						<hr />
						<div
							className='timeline-start timeline-box lg:tooltip'
							data-tip='Чем хорош КПТ, клиент получает от психолога нужные навыки, прорабатывает основные ситуации, вызывающие неудобства - а не просто выговаривается. Наши занятия - конечны, вы не будете ходить к своему терапевту всю жизнь, надо же и меру знать'
						>
							Итоги
						</div>
					</li>
				</ul>
			</div>
		</FadeIn>
	)
}
