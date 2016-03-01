import {
	Map
}
from 'immutable'

export default function change(state = Map({
	1: {
		id: 1,
		name: 'Dan'
	}
}), action) {
	switch (action.type) {
		case "ChangeUser":
			var nstate = state.set(action.id + "", {
				id: action.id,
				name: action.name
			});
			return nstate;
		default:
			return state;
	}
}