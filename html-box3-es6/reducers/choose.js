import {
  BOX_UP, BOX_DOWN, BOX_RIGHT, BOX_LEFT
}
from '../constant/BoxType'

const initialState = {
  x: 0,
  y: 0,
  row: 3,
  col: 3
}

export default function change(state = initialState, action) {
  switch (action.type) {
    case BOX_UP:
      return Object.assign({}, state, {
        y: state.y - 1 < 0 ? 0 : state.y - 1
      });
    case BOX_DOWN:
      return Object.assign({}, state, {
        y: state.y + 1 < initialState.row ? state.y + 1 : initialState.row - 1
      });
    case BOX_RIGHT:
      return Object.assign({}, state, {
        x: state.x + 1 < initialState.col ? state.x + 1 : initialState.col - 1
      });
    case BOX_LEFT:
      return Object.assign({}, state, {
        x: state.x - 1 < 0 ? 0 : state.x - 1
      });
    default:
      return state
  }
}