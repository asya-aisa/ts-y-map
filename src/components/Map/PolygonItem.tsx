import { Polygon } from '@pbe/react-yandex-maps'
import { FC } from 'react'
import { IPolygon } from '../../store/polygon/polygon.interface'
import { useMap } from './useMap'


interface IPolygonItem {
	items: IPolygon
	index: number
}

const PolygonItem: FC<IPolygonItem> = ({ items, index }) => {
	const { handleEditPolygon } = useMap(items, index)

	const polygonOptions = {
		fillColor: '#00FF00',
		strokeColor: '#0000FF',
		opacity: 0.5,
		strokeWidth: 3,
		strokeStyle: 'solid',
	}

	return (
		<Polygon
			geometry={items.polygonCoord}
			options={polygonOptions}
			modules={['geoObject.addon.balloon']}
			properties={{ balloonContent: items.workArea }}
			instanceRef={polygon =>
				handleEditPolygon(polygon as unknown as ymaps.GeoObject)
			}
		/>
	)
}

export default PolygonItem
