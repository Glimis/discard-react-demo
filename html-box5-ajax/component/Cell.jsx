import React,{Component} from 'react'

export default class Cell extends Component{
	render(){
		var {children}=this.props;
		return <cell>{children}</cell>
	}
}