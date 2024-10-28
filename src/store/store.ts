import { configureStore } from '@reduxjs/toolkit'
import { reducer } from './polygon/polygon.slice'

export const store = configureStore({
	reducer: reducer
})

export type TypeRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

