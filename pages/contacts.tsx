import { NextPage } from 'next'
import FadeIn from '@/components/fadeIn/FadeIn'
import { PageProps } from '@/types'
import { getApolloClient } from '@/lib/apollo-client'
import { gql } from '@apollo/client'
import Meta from '@/components/meta/Meta'

const ContactsPage: NextPage<PageProps> = ({ page }: PageProps) => {
	const { seo, contacts } = page

	return (
		<>
			<Meta seo={seo} />
			<FadeIn className='cont'>
				<main>
					<h1 className={`text-4xl font-bold`}>{page.title}</h1>
					<p
						className={`text-lg`}
						dangerouslySetInnerHTML={{
							__html: contacts.adress
						}}
					/>
					<p
						className={`text-lg`}
						dangerouslySetInnerHTML={{
							__html: contacts.tel
						}}
					/>
				</main>
			</FadeIn>
		</>
	)
}

export default ContactsPage

export async function getStaticProps() {
	const apolloClient = getApolloClient()

	const content = await apolloClient.query({
		query: gql`
			query PageContent {
				page(id: "cG9zdDo3NA==") {
					seo {
						metaDesc
						title
					}
					title
					contacts {
						adress
						email
						tel
						telegram
						whatsapp
					}
				}
			}
		`
	})

	const page = {
		...content?.data.page,
		...content?.data.page.contacts
	}

	return {
		props: {
			page
		},
		revalidate: 10
	}
}
