import { FC } from 'react'
//import styles from './SearchList.module.scss'

const SearchList: FC<{ result: string; handleSelect: () => void }> = ({
	result,
	handleSelect,
}) => {
	return (
		<div 
		//className={styles.list} 
			onClick={handleSelect}>
			{result ? (
				<div>{result}</div>
			) : (
				<div className='text-white text-center my-4'>Ничего не найдено</div>
			)}
		</div>
	)
}

export default SearchList
