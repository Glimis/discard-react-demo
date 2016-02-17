import '../less/index.less'
import React from 'react'
import App from '../container/App'
import {createStore} from 'redux'
import Reducers from '../reducers'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

const store = createStore(Reducers)
render(
  <Provider store={store}>
    <App  col='3' row='3' />
  </Provider>,
  document.getElementById('root')
)