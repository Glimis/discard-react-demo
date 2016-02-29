import React from 'react'

export class Cell extends React.Component {
  render() {
    //当前单元格对象
    var {cell} = this.props;
    if(cell.header){
		return (<div className='box header'>{cell.text}</div>)
    }
    else if(cell.food){
    	return (<div className='box food'>{cell.text}</div>)
    }
    else if (cell.choose) {
      return (<div className='box active'>{cell.text}</div>)
    } else {
      return (<div className='box' >{cell.text}</div>)
    }
  }
}