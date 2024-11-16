import { FC } from 'react'
import '../../../App.scss'
import { useActions } from '../../../hooks/useActions'
import {
	IChangeNewCoord,
	IPolygon,
} from '../../../store/polygon/polygon.interface'
import { Button } from '../button/Button'
import styles from './AdminBoard.module.scss'

interface IAdminBoardItem {
	index: number
	el: IPolygon
	saveCoordinates: (coord: IChangeNewCoord) => void
	toggleEdit: (payload: number) => void
}

const AdminBoardItem: FC<IAdminBoardItem> = ({
	index,
	el,
	saveCoordinates,
	toggleEdit,
}) => {
	const { toChangeMapState } = useActions()

	const handleShowWorkArea = () => {
		if (el.polygonCoord.length) toChangeMapState(el.polygonCoord[0][3])
	}

	const handleEdit = () => {
		toggleEdit(index)
		if (el.polygonCoord.length) toChangeMapState(el.polygonCoord[0][3])
	}

	return (
		<div className={styles.middleCont}>
			<h4 onClick={() => handleShowWorkArea()} className={styles.areaName}>
				{el.workArea}
			</h4>
			{el.isEdit ? (
				<Button
					text='save'
					onClick={() => saveCoordinates({ index, newCoord: el.newCoord })}
				/>
			) : (
				<Button text='редактировать' onClick={() => handleEdit()} />
			)}
		</div>
	)
}

export default AdminBoardItem
