import 'bootstrap-css'
import '../less/index.less'



import React from 'react'
import {createStore} from 'redux'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import Nav from '../containers/Nav'

import indexStroe from '../stores/index'

const store = indexStroe()

render(
    <Provider store={store}>
        <div className="container">
            <Nav></Nav>
        </div>
    </Provider>,
    document.getElementById('root')
)



