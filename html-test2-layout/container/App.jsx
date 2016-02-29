import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Box from '../component/Box'
import * as Action from '../action'
import {move} from '../reducers/index'

function isCross(x,y,boxdata){
  if(x<0||y<0){
    return true;
  }

  if(x>(boxdata.col-1)||y>(boxdata.row-1)){
    return true;
  }

  return false;
}

function makeSnaker(state){
   var {boxdata,snaker,food}=state;
   //没有深拷贝的失误
      state.a=Math.random();
   // var state=Object.assign({}, state);
   //清空画板
   var rowData=boxdata.rowData;
   if(rowData){
     rowData.map(function(value){
          var {cellData}=value;
          cellData.map(function(cellObject){
              cellObject.choose=false;
               cellObject.food=false;
                cellObject.header=false;
               
          })
     })
   }

   if(snaker){
    var error={};
       snaker.map(function(value){
          var {x,y}=value;
          if(isCross(x,y,boxdata)){
            //越界
              console.log('越界');
              error={
                msg:'game over',
                type:'越界'
              }
              return  false;
          }else{
            if(rowData[y].cellData[x].choose){
              console.log('咬到自己了')

              error={
                msg:'game over',
                type:'咬到自己了'
              }
              return  false;
            }else{
              rowData[y].cellData[x].choose=true
            }
          }
       })
  }

  
  if(error.msg){
    return error;
   }else{
    rowData[snaker[0].y].cellData[snaker[0].x].header=true
    rowData[food.y].cellData[food.x].choose=true
    rowData[food.y].cellData[food.x].food=true

   return state;
   }

  
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



