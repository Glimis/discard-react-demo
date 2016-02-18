import React from 'react'

export class Cell extends React.Component {
  render() {
    //当前单元格对象
    var {cell} = this.props

    if (cell.choose) {
      return (<div className='box active'>{cell.text}</div>)
    } else {
      return (<div className='box' >{cell.text}</div>)
    }
  }
}