import { Map, SearchControl } from '@pbe/react-yandex-maps'
import { FC } from 'react'
import '../../App.scss'
import { IMapState, IPolygon } from '../../store/polygon/polygon.interface'
import PolygonItem from './PolygonItem'

interface IMapComponent {
	polygons: IPolygon[]
	mapState: IMapState
}

export const MapComponent: FC<IMapComponent> = ({ polygons, mapState }) => {
	return (
		<Map modules={['geoObject.addon.editor']} state={mapState} className='map'>
			debugger
			<SearchControl
				options={{
					float: 'right',
				}}
			/>

			{polygons &&
				polygons.map((el, index) => (
					<div key={index}>
						<PolygonItem items={el} index={index} />
					</div>
				))}
		</Map>
	)
}
