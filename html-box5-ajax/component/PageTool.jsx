import React,{Component} from 'react'

export default class PageTool extends Component{
	render(){
		var {pageNum,changePage}=this.props;
		var html=[];
		for(var i=1;i<pageNum+1;i++){
			html.push(<a onClick={changePage(i)}>{i}</a>)
		}
		return <pagetool>{html}</pagetool>
	}
}