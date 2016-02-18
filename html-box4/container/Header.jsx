import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'




import { addTodo } from '../action'


class Header extends Component{
	render(){
		let input
		var {dispatch}=this.props;
		return <header ><input  ref={function(node){
			input=node;
		}}/> <button   onClick={function(){
			dispatch(addTodo(input.value))
        input.value = ''
      }}>增加</button></header>
	}
}



export default connect()(Header)