import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ShowJson from '../components/ShowJson'

export default class ConsoleResponse extends React.Component {
    render() {
    	var {json,dispatch}=this.props;
        return (<div>
          <h3 className="text-danger">请求头信息</h3> 
          <ShowJson json={json}>  </ShowJson>
				</div>)
    }
}