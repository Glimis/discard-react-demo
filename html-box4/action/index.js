import * as types from '../constant/BoxType'

export const addTodo = (text) => {
	return {
		type: 'ADD_TODO',
		text
	}
}

export const setVisibilityFilter = (filter) => {
	return {
		type: 'SET_VISIBILITY_FILTER',
		filter
	}
}