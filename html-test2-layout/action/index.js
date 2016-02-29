import * as types from '../constant/BoxType'

export function BoxUp() {
	return {
		type: types.BOX_UP
	}
}

export function BoxDown() {
	return {
		type: types.BOX_DOWN

	}
}

export function BoxLeft() {
	return {
		type: types.BOX_LEFT

	}
}

export function BoxRight() {
	return {
		type: types.BOX_RIGHT

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