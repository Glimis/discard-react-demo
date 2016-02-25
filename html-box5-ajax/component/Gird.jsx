import React,{Component} from 'react'

export default class Grid extends Component{
	render(){
		var {children,data,msg}=this.props;
		if(data){
			return <grid>{children}</grid>
		}else{
			return <grid>{msg}</grid>
		}
	}



}