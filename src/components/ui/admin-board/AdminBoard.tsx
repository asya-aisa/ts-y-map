import { FC } from 'react'
import '../../../App.scss'
import { useTypedSelector } from '../../../hooks/useTypesHooks'
import { IChangeNewCoord } from '../../../store/polygon/polygon.interface'
import { getPolygons } from '../../../store/polygon/polygon.slice'
import AddNewPolygon from './addNewPolygon/AddNewPolygon'
import styles from './AdminBoard.module.scss'
import AdminBoardItem from './AdminBoardItem'
import Search from '../../Search/Search'

interface IAdminBoard {
	header: string
	saveCoordinates: (coord: IChangeNewCoord) => void
	toggleEdit: (payload: number) => void
}

const AdminBoard: FC<IAdminBoard> = ({
	header,
	saveCoordinates,
	toggleEdit,
}) => {
	const polygons = useTypedSelector(getPolygons)
	//const [inputValue, setInputValue] = useState<string>('')
	// const [searchTerm, setSearchTerm] = useState<string>('')
	// const [searchCoord, setSearchCoord] = useState<number[]>([])

	// const { toChangeMapState } = useActions()

	// const API_KEY = '451f295a-dec2-4cc4-8b5d-99f9bf679e8d'

	// useEffect(() => {
	// 	async function test() {
	// 		const res = await fetch(
	// 			`https://geocode-maps.yandex.ru/1.x/?apikey=${API_KEY}&format=json&geocode=${searchTerm}`
	// 		)
	// 		const { response } = await res.json()
	// 		const newState =
	// 			response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos
	// 		const coords = newState.split(' ').map(Number).reverse()
	// 		setSearchCoord(coords)

	// 		console.log(response)
	// 	}

	// 	test()
	// }, [searchTerm])

	// const handleSearch = () => {
	// 	toChangeMapState(searchCoord)
	// }

	return (
		<div className={styles.adminBoardWrapper}>
			{/* <input
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					setSearchTerm(e.target.value)
				}
			/> */}

			{/* <SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
			<button onClick={handleSearch}>search</button> */}

			<Search />
			<h1>{header}</h1>
			{polygons &&
				polygons.map((el, index) => (
					<AdminBoardItem
						key={index}
						index={index}
						el={el}
						saveCoordinates={saveCoordinates}
						toggleEdit={toggleEdit}
					/>
				))}
			<AddNewPolygon />
		</div>
	)
}

export default AdminBoard
