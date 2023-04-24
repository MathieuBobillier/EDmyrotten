export const dynamic = 'force-dynamic'

import Results from '@/components/Results'
import request from '@/utils/request'

const API_KEY = process.env.API_KEY

interface HomeProps {
	searchParams: {
		genre?: keyof typeof request
	}
}

export default async function Home({ searchParams }: HomeProps) {
	const genre = searchParams.genre || 'fetchTrending'

	let url = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`

	if (request[genre]?.url) {
		url = `https://api.themoviedb.org/3${request[genre].url}`
	}
	const res = await fetch(url, { next: { revalidate: 10000 } })

	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	const data = await res.json()

	const results = data?.results || []

	return (
		<div className="mt-2 max-w-6xl flex-1 p-4 text-center sm:mx-auto">
			{results && results.length === 0 && (
				<h1 className="mt-8 rounded border border-slate-400 bg-transparent p-6 font-bold">
					No results found
				</h1>
			)}
			{results && <Results movies={results} />}
		</div>
	)
}
