import { useCallback, useEffect } from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypesHooks'
import { IPolygon } from '../../store/polygon/polygon.interface'

export const useMap = (item: IPolygon, index: number) => {
	const { changeNewCoord } = useActions()
	const isEdit = useTypedSelector(state => state.polygons[index].isEdit)
	const polygonCoord = item.polygonCoord

	useEffect(() => {
		changeNewCoord({
			index: index,
			newCoord: polygonCoord,
		})
	}, [changeNewCoord, index, polygonCoord])

	const handleEditPolygon = useCallback(
		(polygon: ymaps.GeoObject) => {
			if (polygon) {
				//здесь переназначаю тип, т.к. в документации yandex-maps ошибка и для метода startDrawing() нет  встроенной типизации
				const editor = polygon.editor as unknown as {
					startDrawing: () => void
					stopDrawing: () => void
				}

				if (isEdit) {
					if (polygonCoord.length) polygon.editor.startEditing()
					else editor.startDrawing()

					polygon.geometry?.events.add('change', e =>
						changeNewCoord({
							index: index,
							newCoord: e.get('newCoordinates'),
						})
					)
				} else {
					polygon.editor.stopEditing()
					editor.stopDrawing()
				}
			}
		},
		[index, isEdit, changeNewCoord, polygonCoord.length]
	)

	return {
		handleEditPolygon,
	}
}
