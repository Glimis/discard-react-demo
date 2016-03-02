import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import NavLink from '../components/NavLink'




class Nav extends React.Component {
    render() {
      let {nav}=this.props;
      var html=[];
       
      nav.forEach(function(value,index){
         html.push(<NavLink key={index} data={value}></NavLink>);
      })
    
      return (<table className="table table-bordered table-hover">
        {html}</table>)
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
)(Nav)