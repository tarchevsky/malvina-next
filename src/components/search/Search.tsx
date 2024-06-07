// import { useState } from 'react'
// import { gql, useQuery } from '@apollo/client'
//
// const SEARCH_QUERY = gql`
// 	query postsAndPages($search: String) {
// 		posts(where: { search: $search }) {
// 			nodes {
// 				id
// 				title
// 				excerpt
// 			}
// 		}
// 		pages(where: { search: $search }) {
// 			nodes {
// 				id
// 				title
// 				excerpt
// 			}
// 		}
// 	}
// `
//
// const Search = ({ placeholder }) => {
// 	const [searchTerm, setSearchTerm] = useState('')
// 	const { data, loading, error } = useQuery(SEARCH_QUERY, {
// 		variables: { search: searchTerm }
// 	})
//
// 	const contents = data ? [...data.posts.nodes, ...data.pages.nodes] : []
//
// 	const handleSearch = event => {
// 		setSearchTerm(event.target.value)
// 	}
//
// 	if (loading) return <p>Loading...</p>
// 	if (error) return <p>Error: {error.message}</p>
//
// 	return (
// 		<div>
// 			<input
// 				type='text'
// 				placeholder={placeholder}
// 				value={searchTerm}
// 				onChange={handleSearch}
// 			/>
// 			<ul>
// 				{contents.map(content => (
// 					<li key={content.id}>
// 						<h3>{content.title}</h3>
// 						<p>{content.excerpt}</p>
// 					</li>
// 				))}
// 			</ul>
// 		</div>
// 	)
// }
//
// export default Search
