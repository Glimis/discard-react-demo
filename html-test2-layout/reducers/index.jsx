import {combineReducers} from 'redux'


const initialState={
  southHeight:100,
  northHeight:100,
  eastWidth:100,
  westWidth:100,
  centerHeight:0,
  centerWidth:0,
  height:0,
  width:0
}

export default function change(data = initialState, action) {
	renderSize(initialState);
  switch (action.type) {
    case "a":
    default:
      return data;
  }
}





function renderSize(state){
          state=Object.assign(state);
          var {width,height}=state;
          //总体尺寸
          state.height=height||window.innerHeight,state.width=width||window.innerWidth;
          //center尺寸
          state.centerHeight=state.height-state.southHeight-state.northHeight;
          state.centerWidth=state.width-state.westWidth-state.eastWidth;
          //验证
          if(state.centerHeight<0){
              state.centerHeight=10;
          }
          if(state.centerWidth<0){
              state.centerWidth=10;
          }
          
          return state;
}


