import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


class Border extends React.Component {
        render() {
        	debugger
            var {height,width}=this.getCenterSize();
            return <div className="border"> { children} < /div>
        }


}






const mapStateToProps = function(state, ownProps) {
  return state
}


export default connect(
mapStateToProps
)(Border)



