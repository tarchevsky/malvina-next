import { NextPage } from 'next'
import FadeIn from '@/components/fadeIn/FadeIn'

import { PageProps } from '@/types'
import { getApolloClient } from '@/lib/apollo-client'
import { gql } from '@apollo/client'
import Meta from '@/components/meta/Meta'
import Link from 'next/link'

const BlogPage: NextPage<PageProps> = ({ page, postsData }: PageProps) => {
	const { seo } = page

	return (
		<>
			<Meta seo={seo} />
			<FadeIn className='cont mb-14'>
				<main>
					<h1 className={`text-4xl font-bold`}>{page.title}</h1>
					<p>
						На данной странице будут полезные статьи о психологии,
						распространенных проблемах человека и способе их решения
						инструментами работы с психологом
					</p>
				</main>
			</FadeIn>
			<div className='cont mb-14'>
				<hr />
			</div>
			<FadeIn>
				<ul>
					{postsData &&
						postsData.length > 0 &&
						postsData.map(post => {
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

					{!postsData ||
						(postsData.length === 0 && (
							<li>
								<p>Oops, no posts found!</p>
							</li>
						))}
				</ul>
			</FadeIn>
		</>
	)
}

export default BlogPage

export async function getStaticProps() {
	const apolloClient = getApolloClient()

	const content = await apolloClient.query({
		query: gql`
			query PageContent {
				page(id: "cG9zdDoyMDQ=") {
					seo {
						metaDesc
						title
					}
					title
				}
			}
		`
	})

	const posts = await apolloClient.query({
		query: gql`
			query Category {
				category(id: "dGVybToz") {
					name
					posts {
						edges {
							node {
								id
								title
								slug
								excerpt
							}
						}
					}
				}
			}
		`
	})

	const page = {
		...content?.data.page
	}

	const postsData = posts?.data.category.posts.edges.map(
		({ node }: PageProps) => ({
			...node,
			path: `/posts/${node.slug}`
		})
	)

	return {
		props: {
			page,
			postsData
		},
		revalidate: 10
	}
}
