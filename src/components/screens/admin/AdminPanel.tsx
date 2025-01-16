import { YMaps } from '@pbe/react-yandex-maps'
import { useActions } from '../../../hooks/useActions'
import { MapComponent } from '../../Map/MapComponent'
import AdminBoard from '../../ui/admin-board/AdminBoard'
import { useAdmin } from './useAdmin'
import { API_KEY } from '../../../configs/api.config'

const AdminPanel = () => {
	const { toggleEdit } = useActions()
	const { saveCoordinates } = useAdmin()

	return (
		<YMaps
		query={{
			load: 'package.full',
			apikey: API_KEY
		}}
		>
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
