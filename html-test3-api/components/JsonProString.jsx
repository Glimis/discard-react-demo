import React from 'react'
import ShowJson from '../components/ShowJson'
import JsonProEmpty from '../components/JsonProEmpty'
export default class JsonProString extends React.Component {
    render() {
        var {name,value}=this.props;
         return (<li > 
                    <span className="key">{name}: </span> 
                    <span className="value">{value}</span>  
                </li>)
        }
}