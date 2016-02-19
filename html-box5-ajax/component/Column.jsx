import React,{Component} from 'react'


export default class Column extends Component{
	render(){
		var {header,cell}=this.props;
		var array=cell();
		return <column >{header}{array}</column>
		
	}
}