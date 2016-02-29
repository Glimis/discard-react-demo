import React from 'react'
import InputParamsCell  from '../components/InputParamsCell'

export default class InputParamsRow extends React.Component {
    render() {
        var {rowdata,edit,dispatch,row,state}=this.props;
        var html=[];
        for(var i=0;i<rowdata.length;i++){
          html.push(<InputParamsCell  key={i} dispatch={dispatch} row={row} col={i} text={rowdata[i]}  edit={edit}/>)
        }
        
        return (<tr className={state}>
                    {html}
                  </tr>)
    }
}