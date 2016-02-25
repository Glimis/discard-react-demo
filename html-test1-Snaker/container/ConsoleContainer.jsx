import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Console from '../component/Console'
import * as Action from '../action'




const mapStateToProps = function(state, ownProps) {
  return state
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    changeCol: function(num){
    	dispatch(Action.ChangeCol(num));
    },
    changeRow:function(num){
		  dispatch(Action.ChangeRow(num));
    },
    flush(){
    	dispatch(Action.BoxFlush());
    }
  }
}

export default connect(
mapStateToProps,
  mapDispatchToProps
)(Console)
