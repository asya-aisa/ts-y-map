import { Polygon } from '@pbe/react-yandex-maps'
import { FC } from 'react'
import { IPolygon } from '../../store/polygon/polygon.interface'
import { polygonOptions } from './polygon.options'
import { useMap } from './useMap'

interface IPolygonItem {
	item: IPolygon
	index: number
}

const PolygonItem: FC<IPolygonItem> = ({ item, index }) => {
	const { handleEditPolygon } = useMap(item, index)

	return (
		<Polygon
			geometry={item.polygonCoord}
			options={polygonOptions}
			modules={['geoObject.addon.balloon']}
			properties={{ balloonContent: item.workArea }}
			instanceRef={polygon =>
				handleEditPolygon(polygon as unknown as ymaps.GeoObject)
			}
		/>
	)
}

export default PolygonItem
