import { ChangeEvent, FC } from 'react'
import SearchField from '../ui/search-field/SearchField'
//import styles from './Search.module.scss'
import { toChangeMapState } from '../../store/polygon/polygon.slice'
import SearchList from './SearchList/SearchList'
import { useSearch } from './useSearch'

const Search: FC = () => {
	const { setSearchTerm, searchCoord, searchTerm, result } = useSearch()

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
