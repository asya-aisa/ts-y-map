import { Map, SearchControl } from '@pbe/react-yandex-maps'
import { FC } from 'react'
import '../../App.scss'
import { useTypedSelector } from '../../hooks/useTypesHooks'
import { getMapState, getPolygons } from '../../store/polygon/polygon.slice'
import PolygonItem from './PolygonItem'

export const MapComponent: FC = () => {
	const polygons = useTypedSelector(getPolygons)
	const mapState = useTypedSelector(getMapState)

	return (
		<Map modules={['geoObject.addon.editor']} state={mapState} className='map'>
			<SearchControl  options={{
				float: 'right'
			}}/>
			{polygons &&
				polygons.map((el, index) => (
					<div key={el.workArea}>
						<PolygonItem item={el} index={index} />
					</div>
				))}
		</Map>
	)
}
