import {combineReducers} from 'redux'
import {BOX_UP, BOX_DOWN, BOX_RIGHT, BOX_LEFT} from '../constant/BoxType'
import changeScene from '../reducers/scene'

const initialState = {
  snaker:[{
    x: 0,
    y: 0
  }],
  food:{
    x:1,
    y:1
  },
  boxdata:changeScene({
  	row: 10,
  	col: 10
  })
}

export default function change(data = initialState, action) {
	
  switch (action.type) {
    case BOX_UP:
      return eat(data,0,-1);
    case BOX_DOWN:
      return eat(data,0,1);
    case BOX_RIGHT:
        return eat(data,1,0);
    case BOX_LEFT:
        return eat(data,-1,0);
    default:
      return data;
  }
}





/**
 * 获取蛇头
 * @return {[type]} [description]
 */
function getHeader(snaker){
  return snaker[0];
}

/**
 * 获取可增加蛇头
 */
function getAddHeader(snaker,move_x,move_y){
  var oldHeader=getHeader(snaker);
  var {x,y}=oldHeader;
  var _x=x+move_x,_y=y+move_y;
  return {
    x:_x,
    y:_y
  }

}

function addHeader(snaker,header){
  snaker.unshift(header);
}


function isFood(header,food){
  return header.x===food.x&&header.y===food.y;
}
//发食物
function getNewFood(snaker,food,boxdata){
	var {col,row}=boxdata;
	//模拟所有格子
	var cells=[];
	for(var i=0;i<row;i++){
		cells[i]=[];
		for(var j=0;j<col;j++){
			cells[i][j]=1;
		}
	}
	//删除蛇身格子
	for(var i=0;i<snaker.length;i++){
		var {x,y}=snaker[i];
		cells[x][y]=0;
	}
	//整理格子
	var _cells=[];
	for(var i=0;i<cells.length;i++){
		var cell=cells[i];
		var _xs=[];
		for(var j=0;j<cell.length;j++){
			if(cell[j]!==0){
				_xs.push({
					x:i,
					y:j
				})
			}
		}
		if(_xs.length>0){
			_cells[i]=_xs;
		}
	}
	//随机获取空白格子
	var _cellsX=~~(Math.random()*_cells.length);
	var _cols=_cells[_cellsX];
	var _cellsY=~~(Math.random()*_cols.length)
	var blankCell=_cols[_cellsY];
	return blankCell;
}
/**
 * eat
 */
function eat(data,move_x,move_y){
	var {snaker,food,scene,boxdata}=data;
  var newHeader=getAddHeader(snaker,move_x,move_y);

  if(isFood(newHeader,food)){
    //添加蛇头,修改食物
    addHeader(snaker,newHeader);
    food=getNewFood(snaker,food,boxdata);
  }else{
    //添加蛇头
    addHeader(snaker,newHeader);
    //删除蛇尾
    snaker.pop();
  }

  return {
    snaker:snaker,
    food:food,
    boxdata:boxdata
  }

}



