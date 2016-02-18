import React,{Component} from 'react'
import Item from '../component/Item'
import { connect } from 'react-redux'
import FilterLink from '../component/FilterLink'
import {setVisibilityFilter} from '../action'


const mapStateToProps = function(state, ownProps) {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    onClick: function(){
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(FilterLink)