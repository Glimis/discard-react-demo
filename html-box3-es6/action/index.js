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

export function ChangeRow(num) {
	return {
		type: types.CHANGE_ROW,
		num
	}
}

export function ChangeCol(num) {
	return {
		type: types.CHANGE_COL,
		num
	}
}

export function BoxFlush() {
	return {
		type: types.BOX_FLUSH
	}
}