import { useCallback, useEffect, useMemo, useState } from 'react'
import { API_URL } from '../../configs/api.config'
import { useDebounce } from '../../hooks/useDebounce'
import { toChangeMapState } from '../../store/polygon/polygon.slice'

export const useSearch = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const [searchCoord, setSearchCoord] = useState([])
	const [result, setResult] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	useEffect(() => {
		if (!searchTerm) return
		async function fetchData() {
			const res = await fetch(`${API_URL}${debouncedSearch}`)
			const { response } = await res.json()
			const newState =
				response?.GeoObjectCollection.featureMember[0].GeoObject.Point.pos
			const coords = newState.split(' ').map(Number).reverse()
			setSearchCoord(coords)

			const description =
				response.GeoObjectCollection.featureMember[0].GeoObject.description

			const city = response.GeoObjectCollection.featureMember[0].GeoObject.name

			setResult(city + description)

			console.log(response)
			console.log(newState)
		}

		fetchData()
	}, [debouncedSearch, searchTerm])

	const handleSelect = useCallback(() => {
		toChangeMapState(searchCoord)
	}, [searchCoord])

	return useMemo(
		() => ({ setSearchTerm, searchCoord, searchTerm, result, handleSelect }),
		[setSearchTerm, searchCoord, searchTerm, result, handleSelect]
	)
}
