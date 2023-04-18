import { useEffect, useState } from 'react'

export function useDebounce(value: string, delay: number): string {
	const [debouncedValue, setDebouncedValue] = useState<string>(value)

	useEffect(
		() => {
			const handler = setTimeout(() => {
				console.log(`Calling debounced function with args: ${value}`)
				setDebouncedValue(value)
			}, delay)

			return () => {
				clearTimeout(handler)
			}
		},
		[value, delay], 
	)

	return debouncedValue
}
