import '../less/index.less'
import '../less/layout.less'
import React from 'react'
import {createStore} from 'redux'
import Reducers from '../reducers'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import Center from '../layout/Border/Center'
import South from '../layout/Border/South'
import West from '../layout/Border/West'
import East from '../layout/Border/East'
import North from '../layout/Border/North'
import Border from '../container/Border'

const store = createStore(Reducers)

render(
  <Provider store={store}>
  		<Border>
        <Center>Center</Center>
        <North heigth="200">North</North>
        <South>South</South>
        <East>East</East>
        <West>West</West>
  		</Border>
  </Provider>,
  document.getElementById('root')
)