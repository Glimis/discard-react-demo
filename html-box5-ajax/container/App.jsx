import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Gird from '../component/Gird'
import Cell from '../component/Cell'
import PageTool from '../component/PageTool'
import Column from '../component/Column'
import * as Action from '../action'


class App extends Component {
    componentDidMount() {
      var {init} = this.props;
      init();
    }
    
  render() {
    var {data,rowsCount,pageNum,page,msg}=this.props.grid;
    var {changePage}=this.props;
    return (
      <div>
        <Gird data={data} msg={msg}>

          <Column
          header={<Cell>姓名</Cell>}
          cell={()=>{
              var array=[];
              data.map(function(obj){
                array.push(<Cell>{obj.name}</Cell>);
              })
              return array;
            }}/>
          

                   <Column
          header={<Cell>年龄</Cell>}
          cell={()=>{
              var array=[];
              data.map(function(obj){
                array.push(<Cell>{obj.age}</Cell>);
              })
              return array;
            }}/>

                   <Column
          header={<Cell>性别</Cell>}
          cell={()=>{
              var array=[];
              data.map(function(obj){
                array.push(<Cell>{obj.sex}</Cell>);
              })
              return array;
            }}/>

        </Gird>
        <PageTool rowsCount={rowsCount} pageNum={pageNum} page={page} changePage={changePage} ></PageTool>
      </div>
    )
  }
}


const mapStateToProps = function(state, ownProps) {
  return state
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    changePage:function(i){
        dispatch(Action.ChangePage(i));
    },
    init:function(){
       dispatch(Action.ChangePage(1));
    }
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
