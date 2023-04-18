'use client'

import { useDebounce } from '@/customHooks/useDebounce'
import { useRouter } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

export default function SearchBox() {
	const router = useRouter()

	const [searchTerm, setSearchTerm] = useState<string | ''>('')

	const debouncedSearchTerm = useDebounce(searchTerm, 300)

	useEffect(() => {
		if (debouncedSearchTerm) {
			router.push(`/search/${searchTerm}`)
		}
		if (searchTerm) {
		}
	}, [debouncedSearchTerm]) 

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value
		setSearchTerm(value)
	}

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		if (searchTerm) {
			router.push(`/search/${searchTerm}`)
			setSearchTerm('')
		}
	}

	return (
		<form
			className="w-full max-w-6xl flex-row p-6 sm:mx-auto"
			onSubmit={handleSubmit}>
			<div className="form-control flex w-full items-center rounded  border bg-transparent py-4 px-4 text-base outline-none">
				<AiOutlineSearch
					className="h-15 w-5 text-[1.1rem] tracking-tight"
					role="button"
				/>
				<input
					type="search"
					className="flex-1 bg-transparent px-4 outline-none"
					placeholder="Search Keyword"
					value={searchTerm}
					onChange={(event) => setSearchTerm(event.target.value)}
				/>
			</div>
		</form>
	)
}
