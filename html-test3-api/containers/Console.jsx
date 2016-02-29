import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ConsoleResponse from '../components/ConsoleResponse'




class Console extends React.Component {
    render() {
    	let {response,dispatch,ajaxmessage}=this.props;
      let {date}=ajaxmessage
        return (<div>
          <ConsoleResponse json={response} date={date}>  </ConsoleResponse>
				</div>)
    }
}


const mapStateToProps = function(state, ownProps) {
  return state
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    dispatch:dispatch
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Console)