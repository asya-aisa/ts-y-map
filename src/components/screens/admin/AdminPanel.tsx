import { YMaps } from '@pbe/react-yandex-maps'
import { useActions } from '../../../hooks/useActions'
import { MapComponent } from '../../Map/MapComponent'
import AdminBoard from '../../ui/admin-board/AdminBoard'
import { useAdmin } from './useAdmin'

const AdminPanel = () => {
	const { toggleEdit } = useActions()
	const { saveCoordinates } = useAdmin()

	return (
		<YMaps>
			<div className='wrapper'>
				<AdminBoard
					header='Зоны работы'
					saveCoordinates={saveCoordinates}
					toggleEdit={toggleEdit}
				/>
				<MapComponent />
			</div>
		</YMaps>
	)
}

export default AdminPanel
