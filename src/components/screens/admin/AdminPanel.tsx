import { YMaps } from '@pbe/react-yandex-maps'
import { useActions } from '../../../hooks/useActions'
import { useTypedSelector } from '../../../hooks/useTypesHooks'
import { getMapState, getPolygons } from '../../../store/polygon/polygon.slice'
import { MapComponent } from '../../Map/MapComponent'
import AdminBoard from '../../ui/admin-board/AdminBoard'
import { useAdmin } from './useAdmin'

const AdminPanel = () => {
	const { toggleEdit } = useActions()
	const { saveCoordinates } = useAdmin()
	const polygons = useTypedSelector(getPolygons)
	const mapState = useTypedSelector(getMapState)

	const API_KEY: string = '05f8d2ae-bd94-4329-b9f9-7351e2ec9627'

	return (
		<YMaps
			query={{
				load: 'package.full',
				apikey: API_KEY,
			}}
		>
			<div className='wrapper'>
				<AdminBoard
					header='Зоны работы'
					saveCoordinates={saveCoordinates}
					toggleEdit={toggleEdit}
				/>
				<MapComponent polygons={polygons} mapState={mapState} />
			</div>
		</YMaps>
	)
}

export default AdminPanel
