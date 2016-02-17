import * as types from '../constant/BoxType'

export function BoxUp(text) {
	return {
		type: types.BOX_UP,
		text
	}
}

export function BoxDown(text) {
	return {
		type: types.BOX_DOWN,
		text
	}
}

export function BoxLeft(text) {
	return {
		type: types.BOX_LEFT,
		text
	}
}

export function BoxRight(text) {
	return {
		type: types.BOX_RIGHT,
		text
	}
}