 import React, {
 	Component
 }
 from 'react'

 export default class List extends Component {
 	render() {
 		var {
 			items
 		} = this.props;
 		return (<div>
			{items.map(function(todo){
			return <p>{todo.text}</p>;
			}
		)}
		</div>)
 	}
 }