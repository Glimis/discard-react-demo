import {
	combineReducers
}
from 'redux'

import articles from './articles'
import users from './users'
import result from './result'

var entities = combineReducers({
	articles,
	users
})

export default combineReducers({
	result,
	entities: entities
})