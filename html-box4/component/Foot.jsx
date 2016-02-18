import React from 'react'
import FilterLink from '../container/VisableFilterLink'
export default class Foot extends React.Component{
	render(){
		return (
			<foot>
			 <FilterLink filter="SHOW_ALL" >全部 </FilterLink>
			 <FilterLink filter="SHOW_ACTIVE">激活</FilterLink>
			 <FilterLink filter="SHOW_COMPLETED">完成</FilterLink>
			</foot>)
	}
}