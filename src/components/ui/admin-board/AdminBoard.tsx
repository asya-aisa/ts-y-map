import { FC } from 'react'
import '../../../App.scss'
import { useTypedSelector } from '../../../hooks/useTypesHooks'
import { IChangeNewCoord } from '../../../store/polygon/polygon.interface'
import { getPolygons } from '../../../store/polygon/polygon.slice'
import Search from '../../Search/Search'
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

	return (
		<div className={styles.adminBoardWrapper}>
			<Search />
			<h1>{header}</h1>
			{polygons &&
				polygons.map((el, index) => (
					<AdminBoardItem
						key={el.workArea}
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
