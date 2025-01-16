import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TypeRootState } from '../store'
import { IChangeNewCoord, IPolygonInitialState } from './polygon.interface'

const initialState: IPolygonInitialState = {
	mapState: {
		center: [55.751574, 37.573856],
		zoom: 10,
	},
	polygons: [
		{   id: 1,
			isEdit: false,
			newCoord: [],
			polygonCoord: [
				[
					[55.75, 37.3],
					[55.9, 37.6],
					[55.74, 37.9],
					[55.6, 37.6],
				],
			],
			workArea: 'Москва + МО',
		},
		{   id:2,
			isEdit: false,
			newCoord: [],
			polygonCoord: [
				[
					[51.48, 39.2],
					[51.64, 38.94],
					[51.81, 39.16],
					[51.65, 39.42],
				],
			],
			workArea: 'Воронеж',
		},
		{   id: 3,
			isEdit: false,
			newCoord: [],
			polygonCoord: [
				[
					[59.94, 30.2],
					[60.01, 30.33],
					[59.94, 30.43],
					[59.88, 30.33],
				],
			],
			workArea: 'Санкт-Петербург',
		},
	],
}

export const polygonSlice = createSlice({
	name: 'polygon',
	initialState,
	reducers: {
		toggleEdit: (state, { payload }: PayloadAction<number>) => {
			state.polygons[payload].isEdit = !state.polygons[payload].isEdit
		},
		changeNewCoord: (state, { payload }: PayloadAction<IChangeNewCoord>) => {
			state.polygons[payload.index].newCoord = payload.newCoord
		},
		saveCoord: (state, { payload }: PayloadAction<IChangeNewCoord>) => {
			state.polygons[payload.index].polygonCoord = payload.newCoord
		},
		toChangeMapState: (state, { payload }: PayloadAction<number[]>) => {
			state.mapState.center = payload
			state.mapState.zoom = 9.9
		},
		toAddNewPolygon: (state, { payload }: PayloadAction<string | undefined>) => {
			const id = state.polygons.length + 1
			state.polygons.push({
				id: id,
				isEdit: true,
				newCoord: [],
				polygonCoord: [],
				workArea: payload,
			})
		},
		toDeletePolygon: (state, { payload }: PayloadAction<number | undefined>) => {
			state.polygons = state.polygons.filter(polygon => polygon.id !== payload)
		}
	},
})

export const getPolygons = (state: TypeRootState) => state.polygons
export const getMapState = (state: TypeRootState) => state.mapState
export const { reducer } = polygonSlice
