import { ChangeEvent, FC, useState } from 'react'
import { useAdmin } from '../../../screens/admin/useAdmin'
import { Button } from '../../button/Button'
import styles from '../AdminBoard.module.scss'

const AddNewPolygon: FC = () => {
	const [newArea, setNewArea] = useState('')
	const [isNewMode, setIsNewMode] = useState(false)
	const { handleAddNewPolygon } = useAdmin(newArea, setIsNewMode)

	return (
		<div className={styles.newPolygonCont}>
			<Button
				text='Добавить новый полигон'
				className={styles.addNewPolygon}
				onClick={() => setIsNewMode(true)}
			/>
			{isNewMode && (
				<div>
					<input
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setNewArea(e.target.value)
						}
						placeholder='укажите название рабочей зоны'
					/>

					<Button text='создать' onClick={() => handleAddNewPolygon()} />
				</div>
			)}
		</div>
	)
}
export default AddNewPolygon
