import React,{Component} from 'react'


function changePagePro(changePage,i){
	return function(){
		changePage(i);
	}
}

export default class PageTool extends Component{
	render(){
		var {pageNum,changePage}=this.props;
		// changePage.call(this,1);
		var html=[];
		for(var i=1;i<pageNum+1;i++){
			html.push(<a href="#" onClick={changePagePro(changePage,i)}>{i}</a>)
		}
		return <pagetool>{html}</pagetool>
	}
}