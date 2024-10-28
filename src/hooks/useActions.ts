import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { allActions } from '../store/rootActions'
import { useAppDispatch } from './useTypesHooks'

export const useActions = () => {
	const dispatch = useAppDispatch()

	return useMemo(() => bindActionCreators(allActions, dispatch), [dispatch])
}
