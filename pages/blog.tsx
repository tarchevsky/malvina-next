import { NextPage } from 'next'
import FadeIn from '@/components/fadeIn/FadeIn'

import { PageProps } from '@/types'
import { getApolloClient } from '@/lib/apollo-client'
import { gql } from '@apollo/client'
import Meta from '@/components/meta/Meta'

const BlogPage: NextPage<PageProps> = ({ page }: PageProps) => {
	const { seo } = page

	return (
		<>
			<Meta seo={seo} />
			<FadeIn className='cont'>
				<main>
					<h1 className={`text-4xl font-bold`}>{page.title}</h1>
				</main>
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

	const page = {
		...content?.data.page
	}

	return {
		props: {
			page
		},
		revalidate: 10
	}
}
