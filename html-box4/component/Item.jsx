import {Component} from 'react'

 export default class Item extends Component{
	render(){
		return <p>{this.props.text}</p>
	}
}