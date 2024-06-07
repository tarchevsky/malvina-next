import { NextPage } from 'next'
import { gql } from '@apollo/client'

import { getApolloClient } from 'lib/apollo-client'
import Link from 'next/link'
import Image from 'next/image'

import { PageProps } from '@/types'
import Meta from '@/components/meta/Meta'
import Hero from '@/components/hero/Hero'
import FadeIn from '@/components/fadeIn/FadeIn'
import Carousel from '@/components/carousel/Carousel'
import CarouselBeyond from '@/components/carouselBeyond/CarouselBeyond'
import { Price } from '@/components/price/Price'
import { Spheres } from '@/components/spheres/Spheres'
import { Timeline } from '@/components/timeline/Timeline'
import { Accordion } from '@/components/accordion/Accordion'
import { MaterialSlider } from '@/components/materialSlider/MaterialSlider'

const HomePage: NextPage<PageProps> = ({ page, posts }: PageProps) => {
	const { seo, heroText, heroBtn, link, altText } = page

	return (
		<>
			<Meta seo={seo} />
			<main>
				<FadeIn className='cont mb-60'>
					<Hero
						src={link}
						alt={altText}
						title={heroText}
						buttonText={heroBtn}
					/>
				</FadeIn>

				<FadeIn className='cont mb-60'>
					<div className='flex flex-col md:flex-row mt-60' id='about'>
						<div className='md:w-1/2 md:flex-shrink-0'>
							<div className='flex flex-col my-4'>
								<div className='avatar'>
									<div className='w-40'>
										<Image
											className='rounded-full'
											src='/avatar-1.png'
											alt='Мальвина'
											width={160}
											height={160}
										/>
									</div>
								</div>
								<div className='font-bold'>Мальвина</div>
								<div className='text-sm'>
									дипломированный психолог-консультант МГУ, 2014 г.
								</div>
								<div className='grid grid-flow-col gap-4 mt-4 justify-start'>
									<Link href='/'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='24'
											height='24'
											viewBox='0 0 24 24'
											className='fill-current'
										>
											<path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z'></path>
										</svg>
									</Link>
									<Link href='/'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='24'
											height='24'
											viewBox='0 0 24 24'
											className='fill-current'
										>
											<path d='M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z'></path>
										</svg>
									</Link>
									<Link href='/'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='24'
											height='24'
											viewBox='0 0 24 24'
											className='fill-current'
										>
											<path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z'></path>
										</svg>
									</Link>
								</div>
							</div>
						</div>
						<p className='flex-auto'>
							Ко мне обращаются за помощью люди, которые не готовы долго и
							мучительно ковыряться в своем прошлом в поисках инсайтов, с
							которыми непонятно что потом делать. Практически каждый запрос
							звучит так: «Я так жить больше не могу! А как по-другому не знаю,
							не умею!» Благодаря совместным усилиям мои клиенты находят в себе
							силы и мотивацию развивать свой личный бренд на фрилансе, а кто-то
							напротив умудряется совмещать работу в найме и мягко
							реализовываться в творчестве, есть те, кто проделал большую
							работу, чтобы выбраться из депрессии и начать жить ту жизнь,
							которая подходит именно ему. Я практикую в рамках
							когнитивно-поведенческого подхода, в данный момент повышаю
							квалификацию и изучаю РЭПТ, с помощью которого результаты терапии
							заметны уже с первых встреч.
						</p>
					</div>
				</FadeIn>

				<FadeIn className='cont mb-60'>
					<div className=' flex flex-col flex-col-reverse md:flex-row gap-[40px]'>
						<div className='flex-auto md:w-1/2'>
							<h2>Почему КПТ?</h2>
							<p>
								Эффективно, быстро, научно.
								<br />
								<br />
								Во время когнитивно-поведенческой терапии клиенты получают
								навыки, которые практикуют во время сеанса с психологом, а так
								же в обычной жизни на протяжении всего периода работы со
								специалистом. После окончания лечения клиент больше не зависит
								от своего терапевта: он может самостоятельно оценивать свои
								мысли и убеждения, решать проблемы, выстраивать и поддерживать
								межличностные отношения, достигать амбициозных целей. КПТ
								ориентирована на разумно короткие сроки достижения ощутимого
								облегчения (6-12 встреч). Часто клиенты видят заметный результат
								уже через пару сессий, а выполняя домашние задания получают
								навыки самопомощи, что у них успешно получается.
							</p>
						</div>
						<div className='relative md:w-1/3'>
							<Image
								src='/IMG-E0280.jpg'
								className='rounded-3xl object-cover'
								alt='Психолог Мальвина за работой'
								width={450}
								height={550}
							/>
						</div>
					</div>
				</FadeIn>

				<Timeline />
				<Accordion />
				<Spheres />
				<Carousel />
				<Price />
				<CarouselBeyond />
				<MaterialSlider />

				<ul>
					{posts &&
						posts.length > 0 &&
						posts.map(post => {
							return (
								<li key={post.slug}>
									<FadeIn className='cont'>
										<Link href={post.path}>
											<h3
												dangerouslySetInnerHTML={{
													__html: post.title
												}}
											/>
											<div
												dangerouslySetInnerHTML={{
													__html: post.excerpt
												}}
											/>
										</Link>
										<Link href={post.path} className='underline'>
											Читать статью
										</Link>
									</FadeIn>
								</li>
							)
						})}

					{!posts ||
						(posts.length === 0 && (
							<li>
								<p>Oops, no posts found!</p>
							</li>
						))}
				</ul>
			</main>
		</>
	)
}

export default HomePage

export async function getStaticProps() {
	const apolloClient = getApolloClient()

	const data = await apolloClient.query({
		query: gql`
			query PostsContents {
				posts {
					edges {
						node {
							id
							excerpt
							title
							slug
						}
					}
				}
			}
		`
	})

	const content = await apolloClient.query({
		query: gql`
			query Home {
				page(id: "cG9zdDo3OA==") {
					seo {
						metaDesc
						title
					}
					home {
						heroImage {
							node {
								altText
								link
							}
						}
						heroText
						heroBtn
					}
				}
			}
		`
	})

	const posts = data?.data.posts.edges.map(({ node }: PageProps) => ({
		...node,
		path: `/posts/${node.slug}`
	}))

	const page = {
		...content?.data.page,
		...content?.data.page.home,
		...content?.data.page.home.heroImage.node
	}

	return {
		props: {
			page,
			posts
		},
		revalidate: 10
	}
}