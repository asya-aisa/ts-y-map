import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, TypeRootState } from '../store/store'

export const useTypedSelector: TypedUseSelectorHook<TypeRootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch
