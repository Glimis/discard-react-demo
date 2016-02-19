import {
	combineReducers
}
from 'redux'

import boxdata from './boxdata'
import snaker from './snaker'

const BoxApp = combineReducers({

	boxdata,
	snaker
})


export default BoxApp