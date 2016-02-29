import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ShowJson from '../components/ShowJson'


export default class ConsoleResponse extends React.Component {
    render() {
    	var {json,dispatch}=this.props;
    	json=json||{};

        return (<div>
          <h3 className="text-danger">请求信息</h3> 
          <p><span>{json.date}</span>
          	  <span>{json.date}</span>
          	  <span>{json.date}</span>
          	  </p>
		 </div>)
    }
}

