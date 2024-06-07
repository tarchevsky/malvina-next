import FadeIn from '@/components/fadeIn/FadeIn'

export const Price = () => {
	return (
		<>
			<FadeIn className='cont mb-60'>
				<div className='overflow-x-auto mt-80'>
					<h5>Цены 1 (цены не обновлял)</h5>
					<table className='table table-zebra'>
						<thead>
							<tr>
								<th className='text-xl'>Описание</th>
								<th className='text-xl'>Цена за единицу</th>
								<th className='text-xl'>Цена</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Пакет 6 сессий (-20%)</td>
								<td>2 560 р</td>
								<td>15 360 р</td>
							</tr>
							<tr>
								<td>Пакет 8 сессий (-25%)</td>
								<td>2 400 р</td>
								<td>19 200 р</td>
							</tr>
							<tr>
								<td>Пакет 8 сессий (-25%)</td>
								<td>2 240 р</td>
								<td>26 880 р</td>
							</tr>
						</tbody>
					</table>
				</div>
			</FadeIn>

			<FadeIn className='cont mb-60'>
				<div className='mt-80'>
					<h5 className='flex justify-center'>Цены 2 (обновлено)</h5>
					<div className='stat-table flex justify-center'>
						<div className='stats shadow grid-rows-3 lg:grid-rows-1'>
							<div className='stat'>
								<div className='stat-value'>19 440 р</div>
								<div className='stat-title'>Пакет 6 сессий (-20%)</div>
							</div>

							<div className='stat'>
								<div className='stat-value'>24 480 р</div>
								<div className='stat-title'>Пакет 8 сессий (-25%)</div>
							</div>

							<div className='stat'>
								<div className='stat-value'>34 560 р</div>
								<div className='stat-title'>Пакет 8 сессий (-25%)</div>
							</div>
						</div>
					</div>
					<div>
						<p>
							Продолжительность одной сессии: 50 минут
							<br />
							Стоимость разовой консультации 3.600 р за сессию
							<br />
							Стоимость первой (диагностической) сессии -50% = 1600 р (возможно,
							здесь надо тоже обновить)
						</p>
					</div>
				</div>
			</FadeIn>

			<FadeIn className='cont mb-60'>
				<div className='mt-80'>
					<h5>Цены 3</h5>
					<b className='font-bold'>
						Стоимость разовой консультации 3.600 р за сессию<sup>*</sup>
					</b>
					<p className='mt-10'>
						Стоимость первой (диагностической) сессии -50% = 1600 р
					</p>
					<p className='text-xs mt-10 lg:mt-0'>
						<sup>*</sup>продолжительность одной сессии: 50 минут
					</p>
					<div className='mt-10 grid lg:grid-cols-2 lg:gap-10'>
						<div className='py-6 border-y-[1px] border-white lg:border-none flex justify-between lg:bg-base-200 lg:p-6'>
							<div className='font-bold'>Пакет 6 сессий (-20%)</div>
							<div>19 440 р</div>
						</div>
						<div className='py-6 flex justify-between lg:bg-base-200 lg:p-6'>
							<div className='font-bold'>Пакет 8 сессий (-25%)</div>
							<div>24 480 р</div>
						</div>
						<div className='lg:col-span-2 py-6 border-y-[1px] border-white lg:border-none flex justify-center lg:bg-base-200 lg:p-6 lg:w-[48.5%] lg:m-auto'>
							<div className='flex justify-between w-full lg:max-w-md'>
								<div className='font-bold'>Пакет 8 сессий (-25%)</div>
								<div>34 560 р</div>
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
