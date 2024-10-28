export interface IMapState {
	center: number[]
	zoom: number
}
export interface IPolygon {
	isEdit: boolean
	newCoord: [number[][]] | []
	polygonCoord: [number[][]] | []
	workArea: string | undefined
}

export interface IPolygonInitialState {
	mapState: IMapState
	polygons: IPolygon[]
}

export interface IChangeNewCoord {
	newCoord: [number[][]] | []
	index: number
}
