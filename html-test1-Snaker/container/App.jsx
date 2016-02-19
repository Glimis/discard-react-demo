import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Box from '../component/Box'
import * as Action from '../action'

function makeSnaker(state){
   // var state=Object.assign({}, state)
   var {snaker}=state;
   var {rowData,food}=state.boxdata;
   
   //清空画板
   if(rowData){
     rowData.map(function(value){
          var {cellData}=value;
          cellData.map(function(cellObject){
              cellObject.choose=false;
          })
     })
   }

   if(snaker){
    var body=snaker.body;
    //蛇头是否为食物
    var flag=snaker.eatFood(snaker,food);
    if(flag){
      // snaker.createFood();
    }
   snaker.body.map(function(value){
      var {x,y}=value;
      rowData[y].cellData[x].choose=true
   })
  }
   
   rowData[food.y].cellData[food.x].choose=true
   rowData[food.y].cellData[food.x].food=true

   return state;
}



const mapStateToProps = function(state, ownProps) {
  return makeSnaker(state)
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    onKeyDown: function(e){
            if (e.keyCode === 37) {
                dispatch(Action.BoxLeft());
            } else if (e.keyCode === 38) {
               dispatch(Action.BoxUp());
            } else if (e.keyCode === 39) {
                dispatch(Action.BoxRight());
            } else if (e.keyCode === 40) {
                 dispatch(Action.BoxDown());
            }
    }
  }
}


export default connect(
mapStateToProps,
  mapDispatchToProps
)(Box)



