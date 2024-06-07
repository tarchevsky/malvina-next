import FadeIn from '@/components/fadeIn/FadeIn'

export const Accordion = () => {
	return (
		<FadeIn className='cont mb-60'>
			<div className='m-auto'>
				<h3>Важные вопросы</h3>
				<div className='join join-vertical w-full mt-10'>
					<div className='collapse collapse-arrow join-item border border-neutral'>
						<input type='radio' name='my-accordion-4' />
						<div className='collapse-title text-xl font-medium'>
							Сколько длится терапия?
						</div>
						<div className='collapse-content'>
							<p>
								Иногда достаточно 2-3 сессии, а некоторым клиентам необходима
								долгосрочная терапия. Сроки определяются индивидуально, как и
								частота встреч. Средняя длительность терапии у клиентов без
								выраженных расстройств составляет 8-12 сессий. Длительность
								одной сессии 45-50 минут, как правило один раз в неделю.
							</p>
						</div>
					</div>
					<div className='collapse collapse-arrow join-item border border-neutral'>
						<input type='radio' name='my-accordion-4' />
						<div className='collapse-title text-xl font-medium'>
							Возможны ли офлайн встречи?
						</div>
						<div className='collapse-content'>
							<p>
								Да, по договоренности с клиентом и после пересмотра стоимости
								услуг. Есть возможность личных встреч как в Москве, так и в
								Махачкале, Каспийске (Республика Дагестан).
							</p>
						</div>
					</div>
					<div className='collapse collapse-arrow join-item border border-neutral'>
						<input type='radio' name='my-accordion-4' />
						<div className='collapse-title text-xl font-medium'>
							С какими запросами я не работаю?
						</div>
						<div className='collapse-content'>
							<p>
								Я не работаю с ПРЛ, клинической депрессией с суицидальными
								рисками, шизофренией, диссоциативным расстройством,
								зависимостями химическими и психическими, тяжелыми формами ПТСР,
								паранойей и не оказываю экстренную психологическую помощь. Также
								я не работаю с людьми младше 20 лет.
							</p>
						</div>
					</div>
					<div className='collapse collapse-arrow join-item border border-neutral'>
						<input type='radio' name='my-accordion-4' />
						<div className='collapse-title text-xl font-medium'>
							С чем я могу вам помочь?
						</div>
						<div className='collapse-content'>
							<p>
								Я помогу вам справиться с избыточными эмоциями (гнев, агрессия,
								стыд, подавленность и пр.), работаю с некоторыми формами тревоги
								и депрессии, вопросами самореализации и определения жизненного
								пути, кризисы, а так же с клиентами, которые испытывают
								трудности с межличностными отношениями.
							</p>
						</div>
					</div>
					<div className='collapse collapse-arrow join-item border border-neutral'>
						<input type='radio' name='my-accordion-4' />
						<div className='collapse-title text-xl font-medium'>
							А нужен ли мне психолог?
						</div>
						<div className='collapse-content'>
							<p>
								Не существует такого правила, согласно которому абсолютно каждый
								человек нуждается в терапии. К психологу чаще всего приходят,
								когда самостоятельно справиться невозможно, есть ощущение, что
								вы еще больше запутались, либо качество жизни сильно ухудшилось,
								а вместе с ним и ваш эмоциональный фон.
							</p>
						</div>
					</div>
					<div className='collapse collapse-arrow join-item border border-neutral'>
						<input type='radio' name='my-accordion-4' />
						<div className='collapse-title text-xl font-medium'>
							Могу ли я прописать медикаменты?
						</div>
						<div className='collapse-content'>
							<p>
								Нет, моей квалификации не достаточно для постановки диагноза, а
								тем более выдачи рецептов на медикаментозное лечение. Однако, я
								готова вам предоставить рекомендации квалифицированных
								специалистов, которые помогут подобрать эффективное лечение.
							</p>
						</div>
					</div>
				</div>
			</div>
		</FadeIn>
	)
}
