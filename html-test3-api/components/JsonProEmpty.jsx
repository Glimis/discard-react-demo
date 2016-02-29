import React from 'react'

export default class JsonPro extends React.Component {
    render() {
        var {name,value}=this.props;
        return (<li  > 
                    <span className="key">{name}: </span> 
                    <span className="value empty">{value}</span>  
                </li>)
    }
}