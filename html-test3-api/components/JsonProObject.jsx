import React from 'react'
import ShowJson from '../components/ShowJson'
export default class JsonPro extends React.Component {
    render() {
        var {name,value}=this.props;
        return (<li> 
                    <span className="key">{name}: </span> 
                    <span className="value">{'{}'} {Object.getOwnPropertyNames(value).length} keys</span> 
                    <ShowJson json={value}></ShowJson>
                </li>)
    }
}