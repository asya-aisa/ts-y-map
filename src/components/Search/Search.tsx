import { ChangeEvent, FC } from 'react'
import SearchField from '../ui/search-field/SearchField'
//import styles from './Search.module.scss'
import SearchList from './SearchList/SearchList'
import { useSearch } from './useSearch'

const Search: FC = () => {
	const { setSearchTerm, searchTerm, result, handleSelect } = useSearch()

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
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
