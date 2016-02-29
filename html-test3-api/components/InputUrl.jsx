import React from 'react'
import InputParamsTable from '../components/InputParamsTable'

export default class InputUrl extends React.Component {
    render() {
        var {edit,params,dispatch,changeUrl,submit}=this.props;
    	var {url,data}=params;
        return (<div className="container">
        			<input type="text" className="form-control" ref="url"  placeholder="请求地址"  value={url} onChange={changeUrl}/>
					<InputParamsTable dispatch={dispatch} data={data} edit={edit}></InputParamsTable>

                    <button type="button" className="btn btn-default" onClick={()=>{
					      	submit({
                                url:this.refs.url.value,
                                method:'GET'
                            },data);
					      }}>Get</button>  &nbsp;
                    <button type="button" className="btn btn-default" onClick={()=>{
                            submit({
                                url:this.refs.url.value,
                                method:'POST'
                            },data);
                          }}>Post</button>      
				</div>)
    }
}