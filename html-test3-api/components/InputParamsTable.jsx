import React from 'react'
import InputParamsRow from '../components/InputParamsRow'

export default class InputParamsTable extends React.Component {
    render() {
    	var {data,edit,dispatch}=this.props;
        
    	var html=[];
        //提取公共参数
        
        var dangerParam=this.getDangerParam(data);
    	for(var i=0;i<data.length;i++){
            var state='active';
            if(dangerParam[data[i][0]]===1){
                state='danger'
            }
    		html.push(<InputParamsRow key={i} dispatch={dispatch} rowdata={data[i]} row={i} edit={edit} state={state}/>)
    	}
    	html.push(<InputParamsRow key={i} dispatch={dispatch}  rowdata={['','']} row={i} edit={edit} state='active'/>)
        return (<table className="params table table-bordered">
                    <tbody>
					   {html}
                    </tbody>
				</table>)
    }

    getDangerParam(data){
        var danger={},temp={};
        
        for(var i=0;i<data.length;i++){
            var key=data[i][0];
            if(temp[key]){
                danger[key]=1;
            }else{
                temp[key]=1;
            }
        }
        return danger;
    }
}