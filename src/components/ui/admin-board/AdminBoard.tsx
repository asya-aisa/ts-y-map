import { ChangeEvent, FC, useEffect, useState } from 'react'
import '../../../App.scss'
import { useTypedSelector } from '../../../hooks/useTypesHooks'
import { IChangeNewCoord } from '../../../store/polygon/polygon.interface'
import { getPolygons } from '../../../store/polygon/polygon.slice'
import AddNewPolygon from './addNewPolygon/AddNewPolygon'
import styles from './AdminBoard.module.scss'
import AdminBoardItem from './AdminBoardItem'

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
	const [inputValue, setInputValue] = useState<string>('')
	const [searchTerm, setSearchTerm] = useState<string>('')

	const API_KEY = '451f295a-dec2-4cc4-8b5d-99f9bf679e8d'

	useEffect(() => {
		async function test() {
			const res = await fetch(
				`https://geocode-maps.yandex.ru/1.x/?apikey=${API_KEY}&format=json&geocode=${searchTerm}`
			)
			const data = await res.json()
			console.log(data)
		}

		test()
	}, [searchTerm])

	return (
		<div className={styles.adminBoardWrapper}>
			<input
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					setInputValue(e.target.value)
				}
			/>
			<button onClick={() => setSearchTerm(inputValue)}>search</button>
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
