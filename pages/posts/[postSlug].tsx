import Link from 'next/link'
import { gql } from '@apollo/client'

import { getApolloClient } from '@/lib/apollo-client'

import { Params, PostEdge, PostPageProps } from '@/types'
import Meta from '@/components/meta/Meta'
import FadeIn from '@/components/fadeIn/FadeIn'
import { ReadLine } from '@/components/readLine/ReadLine'

export default function Post({ post, site }: PostPageProps) {
	const { seo, featuredImage } = post

	return (
		<div>
			<Meta seo={seo} />
			<ReadLine />
			<FadeIn className='relative'>
				<main>
					{featuredImage ? (
						<>
							<img
								src={featuredImage.node.link}
								alt={featuredImage.node.altText}
								className='h-[90svh] w-full object-cover brightness-50'
							/>
							<Link
								href='/'
								className='absolute top-[16px] left-[16px] sm:top-[40px] sm:left-[40px] md:top-[40px] md:left-[100px] 2xl:left-[200px]  text-white'
							>
								&lt; Назад
							</Link>
							<div className='absolute bottom-[16px] left-[16px] sm:bottom-[40px] sm:left-[40px] md:bottom-[40px] md:left-[100px] 2xl:left-[200px] flex flex-col'>
								<h1 className='text-white'>{post.title}</h1>
								<div className='text-white'>
									Дата: <span>10.10.2010</span>
								</div>
								<div className='text-white'>
									Рубрика: <span>Блог</span>
								</div>
							</div>
						</>
					) : (
						<>
							<img
								src='/more-dark.jpg'
								alt='Картинка статьи'
								className='h-[90svh] w-full object-cover brightness-50'
							/>
							<Link
								href='/'
								className='absolute top-[16px] left-[16px] sm:top-[40px] sm:left-[40px] md:top-[40px] md:left-[100px] 2xl:left-[200px]  text-white'
							>
								&lt; Назад
							</Link>
							<div className='absolute flex flex-col'>
								<h1 className='text-white'>{post.title}</h1>
								<div className='text-white'>
									Дата: <span>10.10.2010</span>
								</div>
								<div className='text-white'>
									Рубрика: <span>Блог</span>
								</div>
							</div>
						</>
					)}
				</main>
			</FadeIn>
			<FadeIn className='px-[16px]'>
				<section className='prose m-auto'>
					<blockquote>
						<p>Цитата</p>
					</blockquote>

					<div
						dangerouslySetInnerHTML={{
							__html: post.content
						}}
					/>
				</section>
			</FadeIn>
		</div>
	)
}

export async function getStaticProps({ params }: { params: Params }) {
	const { postSlug } = params

	const apolloClient = getApolloClient()

	const data = await apolloClient.query({
		query: gql`
			query PostBySlug($slug: String!) {
				generalSettings {
					title
				}
				postBy(slug: $slug) {
					id
					content
					title
					slug
					featuredImage {
						node {
							link
							altText
						}
					}
					seo {
						title
						metaDesc
					}
				}
			}
		`,
		variables: {
			slug: postSlug
		}
	})

	const post = data?.data.postBy

	if (!post) {
		return {
			props: {},
			notFound: true
		}
	}

	const site = {
		...data?.data.generalSettings
	}

	return {
		props: {
			post,
			site
		}
	}
}

export async function getStaticPaths() {
	return {
		paths: [],
		fallback: 'blocking'
	}
}
