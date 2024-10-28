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

	const API_KEY: string = 'd3a0a0bb-a655-4f82-a46b-25d05066d6b6'

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
