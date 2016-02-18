import React from 'react'
export default class FilterLink extends React.Component{
	render(){
		var {active,children,onClick}=this.props;
		console.log(onClick,this.props);
		if(active){
			return <span>{children}</span>
		}
		return <a href="#" onClick={onClick}>{children}</a>
	}
}