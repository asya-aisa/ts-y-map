import { useCallback, useEffect, useMemo } from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypesHooks'
import { IPolygon } from '../../store/polygon/polygon.interface'
import { TypeRootState } from '../../store/store'

export const useMap = (items: IPolygon, index: number) => {
	const { changeNewCoord } = useActions()
	const isEdit = useTypedSelector(
		(state: TypeRootState) => state.polygons[index].isEdit
	)
	const polygonCoord = items.polygonCoord

	useEffect(() => {
		changeNewCoord({
			index: index,
			newCoord: polygonCoord,
		})
	}, [changeNewCoord, index, polygonCoord])

	const handleEditPolygon = useCallback(
		(polygon: ymaps.GeoObject) => {
			if (polygon) {
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

	return useMemo(
		() => ({
			handleEditPolygon,
		}),
		[handleEditPolygon]
	)
}
