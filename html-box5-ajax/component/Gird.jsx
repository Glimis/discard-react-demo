import React,{Component} from 'react'

export default class Grid extends Component{
	render(){
		var {children,data}=this.props;
		return <grid>{children}</grid>
	}
}