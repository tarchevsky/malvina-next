import FadeIn from '@/components/fadeIn/FadeIn'

export const Price = () => {
	return (
		<>
			<FadeIn className='cont mb-60'>
				<div className='mt-80'>
					<h5>Цены 3</h5>
					<b className='font-bold'>
						Стоимость разовой консультации 4000 р за сессию<sup>*</sup>
					</b>
					<p className='mt-10'>
						Стоимость первой (диагностической) сессии = 2000 р
					</p>
					<p className='text-xs mt-10 lg:mt-0'>
						<sup>*</sup>продолжительность одной сессии: 50 минут
					</p>
					<div className='mt-10 grid lg:grid-cols-2 lg:gap-10'>
						<div className='py-6 border-y-[1px] border-white lg:border-none flex justify-between lg:bg-base-200 lg:p-6'>
							<div className='font-bold'>Пакет 6 сессий</div>
							<div>20 000 р</div>
						</div>
						<div className='py-6 flex justify-between lg:bg-base-200 lg:p-6'>
							<div className='font-bold'>Пакет 8 сессий</div>
							<div>25 000 р</div>
						</div>
						<div className='lg:col-span-2 py-6 border-y-[1px] border-white lg:border-none flex justify-center lg:bg-base-200 lg:p-6 lg:w-[48.5%] lg:m-auto'>
							<div className='flex justify-between w-full lg:max-w-md'>
								<div className='font-bold'>Пакет 8 сессий</div>
								<div>35 000 р</div>
							</div>
						</div>
					</div>
					<button className='btn mt-10 hidden lg:block lg:btn-lg m-auto'>
						Записаться
					</button>
				</div>
			</FadeIn>
		</>
	)
}
