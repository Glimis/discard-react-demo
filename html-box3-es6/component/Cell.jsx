import React from 'react'

export class Cell extends React.Component {
  render() {
    var props = this.props;
    //选中对象
    var choose = props.box.choose;
    //当前单元格对象
    var cell = props.cell;

    if (choose.x == cell.x && choose.y == cell.y) {
      return (<div className='box active'>{cell.text}</div>)
    } else {
      return (<div className='box' >{cell.text}</div>)
    }
  }
}