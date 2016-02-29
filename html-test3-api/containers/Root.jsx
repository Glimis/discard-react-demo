import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ShowResponseBody from '../containers/ShowResponseBody'
import EditParams from '../containers/EditParams'
import Console from '../containers/Console'






export default  class App extends Component {    
  render() {
    return (
       <div className="border" >
        <div className="border-right">
          <ShowResponseBody>  </ShowResponseBody>
        </div>
        <div className="border-center">
            <EditParams />
        </div>
        <div className="border-bottom">
            <Console> </Console>
          </div>
      </div>
    )
  }
}


