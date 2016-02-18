import React,{Component} from 'react'
import Item from '../component/Item'
import { connect } from 'react-redux'
import List from '../component/List'



const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}



export default connect()(List)