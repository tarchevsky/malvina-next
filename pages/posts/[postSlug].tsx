import Link from 'next/link'
import { gql } from '@apollo/client'

import { getApolloClient } from '@/lib/apollo-client'

import { Params, PostEdge, PostPageProps } from '@/types'
import Meta from '@/components/meta/Meta'

export default function Post({ post, site }: PostPageProps) {
	const { seo, featuredImage } = post

	return (
		<div>
			<Meta seo={seo} />

			<main className='cont'>
				<img src={featuredImage.node.link} alt={featuredImage.node.altText} />
				<h1>{post.title}</h1>

				<div>
					<div
						dangerouslySetInnerHTML={{
							__html: post.content
						}}
					/>
				</div>

				<p>
					<Link href='/'>&lt; Back To Home</Link>
				</p>
			</main>
		</div>
	)
}

// export async function getStaticProps({ params }: { params: Params }) {
// 	const apolloClient = getApolloClient()
//
// 	const data = await apolloClient.query({
// 		query: gql`
// 			query PostBySlug($slug: String!) {
// 				generalSettings {
// 					title
// 				}
// 				postBy(slug: $slug) {
// 					id
// 					content
// 					title
// 					slug
// 					seo {
// 						title
// 						metaDesc
// 					}
// 					featuredImage {
// 						node {
// 							link
// 							altText
// 						}
// 					}
// 				}
// 			}
// 		`,
// 		variables: {
// 			slug: params.postSlug
// 		}
// 	})
//
// 	let post = data?.data.postBy
//
// 	const postData = {
// 		...data?.data.postBy.feauturedImage
// 	}
//
// 	const site = {
// 		...data?.data.generalSettings,
// 		...data?.data.seo
// 	}
//
// 	return {
// 		props: {
// 			post,
// 			postData,
// 			path: `/posts/${post.slug}`,
// 			site
// 		},
// 		revalidate: 10
// 	}
// }
//
// export async function getStaticPaths() {
// 	const apolloClient = getApolloClient()
//
// 	const data = await apolloClient.query({
// 		query: gql`
// 			{
// 				posts(first: 10000) {
// 					edges {
// 						node {
// 							id
// 							title
// 							content
// 							slug
// 						}
// 					}
// 				}
// 			}
// 		`
// 	})
//
// 	const posts = data?.data.posts.edges.map(({ node }: PostEdge) => node)
//
// 	const paths = posts.map(({ slug }: any) => {
// 		return {
// 			params: {
// 				postSlug: slug
// 			}
// 		}
// 	})
//
// 	return {
// 		paths: [...paths],
// 		fallback: 'blocking'
// 	}
// }

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
