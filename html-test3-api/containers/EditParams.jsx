import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


import InputUrl from '../components/InputUrl'
import * as Action from '../actions'



const mapStateToProps = function(state, ownProps) {
  return {
    edit: state.edit,
    params: state.params
  }
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    changeUrl:(e)=>{
    	dispatch(Action.ChangeUrl(e.target.value));
    },
    submit:(ajaxmessage,params)=>{
    	dispatch(Action.Access(ajaxmessage,params));
    },
    dispatch:dispatch
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputUrl)
