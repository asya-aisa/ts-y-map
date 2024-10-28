import { useCallback, useMemo } from 'react'
import { useActions } from '../../../hooks/useActions'
import { IChangeNewCoord } from '../../../store/polygon/polygon.interface'

export const useAdmin = (
	newArea?: string,
	setIsNewMode?: (value: boolean) => void
) => {
	const { saveCoord, toggleEdit, toAddNewPolygon } = useActions()

	const saveCoordinates = useCallback(
		({ index, newCoord }: IChangeNewCoord) => {
			saveCoord({
				index: index,
				newCoord: newCoord,
			})

			toggleEdit(index)
		},
		[saveCoord, toggleEdit]
	)

	const handleAddNewPolygon = useCallback(() => {
		toAddNewPolygon(newArea)
		alert('нарисуйте новый полигон на карте')
		if (setIsNewMode) setIsNewMode(false)
	}, [newArea, toAddNewPolygon, setIsNewMode])

	return useMemo(
		() => ({
			saveCoordinates,
			handleAddNewPolygon,
		}),
		[saveCoordinates, handleAddNewPolygon]
	)
}
