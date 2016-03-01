import {
	List
}
from 'immutable'

export default function change(state = List([1, 2]), action) {
	return state;
}