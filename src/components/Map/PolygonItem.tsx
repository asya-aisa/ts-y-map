import { Polygon } from '@pbe/react-yandex-maps'
import { FC } from 'react'
import { IPolygon } from '../../store/polygon/polygon.interface'
import { polygonOptions } from './polygon.options'
import { useMap } from './useMap'

interface IPolygonItem {
	items: IPolygon
	index: number
}

const PolygonItem: FC<IPolygonItem> = ({ items, index }) => {
	const { handleEditPolygon } = useMap(items, index)

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
