import { ChangeEvent, FC, useState } from 'react'
import { useAdmin } from '../../../screens/admin/useAdmin'
import styles from '../AdminBoard.module.scss'

const AddNewPolygon: FC = () => {
	const [newArea, setNewArea] = useState<string>('')
	const [isNewMode, setIsNewMode] = useState<boolean>(false)
	const { handleAddNewPolygon } = useAdmin(newArea, setIsNewMode)

	return (
		<div className={styles.newPolygonCont}>
			<button
				onClick={() => setIsNewMode(true)}
				className={styles.addNewPolygon}
			>
				Добавить новый полигон
			</button>
			{isNewMode && (
				<div>
					<input
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setNewArea(e.target.value)
						}
						placeholder='укажите название рабочей зоны'
					/>
					<button onClick={() => handleAddNewPolygon()}>создать</button>
				</div>
			)}
		</div>
	)
}
export default AddNewPolygon
