import {
	combineReducers
}
from 'redux'
import choose from './choose'
import control from './control'

const BoxApp = combineReducers({
	choose,
	control
})

export default BoxApp