import '../less/index.less'
import React from 'react'
import App from '../container/App'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import indexStroe from '../store/index'

const store = indexStroe()
render(
  <Provider store={store}>
    <App   />
  </Provider>,
  document.getElementById('root')
)