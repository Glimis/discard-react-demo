import React from 'react'
import { connect } from 'react-redux'

import JsonProString from '../components/JsonProString'
import JsonProEmpty from '../components/JsonProEmpty'
import JsonProObject from '../components/JsonProObject'
import ShowJson from '../components/ShowJson'


const mapStateToProps = function(state, ownProps) {
  return {
    json:state.responsebody
  };
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    dispatch:dispatch
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowJson)