import React from 'react'
import {Cell} from './Cell'

export class Row extends React.Component {
  render() {
      var props=this.props;
      //当前行对象
      var row=props.row;
      var html=[];
      //遍历行对象内的单元格对象
      for(var i=0;i<row.cellData.length;i++){
        var cellObject=row.cellData[i];
         html.push(<Cell cell={cellObject} box={this.props.box}/>);
      }
      return <div  className="row clearfix">{html}</div>
  }
}

