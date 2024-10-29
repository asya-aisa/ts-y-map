import { ChangeEvent, FC, useEffect, useState } from 'react'
import { useActions } from '../../hooks/useActions'
import { useDebounce } from '../../hooks/useDebounce'
import SearchField from '../ui/search-field/SearchField'
//import styles from './Search.module.scss'
import SearchList from './SearchList/SearchList'

const Search: FC = () => {
	const API_KEY = '451f295a-dec2-4cc4-8b5d-99f9bf679e8d'
	const [searchTerm, setSearchTerm] = useState('')
	const [searchCoord, setSearchCoord] = useState<number[]>([])
	const [result, setResult] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const { toChangeMapState } = useActions()

	useEffect(() => {
		async function test() {
			const res = await fetch(
				`https://geocode-maps.yandex.ru/1.x/?apikey=${API_KEY}&format=json&geocode=${debouncedSearch}`
			)
			const { response } = await res.json()
			const newState =
				response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos
			const coords = newState.split(' ').map(Number).reverse()
			setSearchCoord(coords)

			const description =
				response.GeoObjectCollection.featureMember[0].GeoObject.description

			const city = response.GeoObjectCollection.featureMember[0].GeoObject.name

			setResult(city + description)

			console.log(response)
		}

		test()
	}, [debouncedSearch])

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const handleSelect = () => {
		toChangeMapState(searchCoord)
	}

	return (
		<div 
		//className={styles.wrapper}
		>
			<SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
			{result && <SearchList result={result} handleSelect={handleSelect} />}
		</div>
	)
}

export default Search
