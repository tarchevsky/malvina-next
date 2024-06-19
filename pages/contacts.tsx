import { NextPage } from 'next'
import FadeIn from '@/components/fadeIn/FadeIn'
import { PageProps } from '@/types'
import { getApolloClient } from '@/lib/apollo-client'
import { gql } from '@apollo/client'
import Meta from '@/components/meta/Meta'
import ContactForm from '@/components/contactForm/ContactForm'

const ContactsPage: NextPage<PageProps> = ({ page }: PageProps) => {
	const { seo, contacts } = page

	return (
		<>
			<Meta seo={seo} />
			<FadeIn className='cont'>
				<main>
					<h1 className={`text-4xl my-14 xl:my-32`}>{page.title}</h1>
					<div className='flex flex-col flex-col-reverse gap-14 xl:flex-row xl:gap-32'>
						<ContactForm />
						<div className={`flex flex-col justify-center`}>
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
						</div>
					</div>
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
