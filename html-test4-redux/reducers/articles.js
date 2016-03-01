import {
	Map
}
from 'immutable'

export default function change(state = Map({
	1: {
		id: 1,
		title: 'Some Article',
		author: 1
	},
	2: {
		id: 2,
		title: 'Other Article',
		author: 1
	}
}), action) {

	return state;

}