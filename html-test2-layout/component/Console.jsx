import React from 'react'

export default class Console extends React.Component{
	render(){
		var {changeRow,changeCol,flush}=this.props;
		
		var {col,row,choose_x,choose_y}=this.props.boxdata;
		
		return (<form className="console">
					<button type="button" onClick={()=>{
						flush()
					}}>刷新</button>
					<h3>难度</h3>
					<div>行:<input type="text" value={row}  onChange={(e) => {
        				changeRow(e.target.value);
      				}} /></div>
					<div>列:<input type="text"  value={col} onChange={(e) => {
        				changeCol(e.target.value);
      				}} /></div>
					<h3>空白格</h3>
					<div>行:<input type="text" value={choose_y}  /></div>
					<div>列:<input type="text" value={choose_x} /></div>
            	</form>)
	}
}

