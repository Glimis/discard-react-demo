import {
  BOX_UP, BOX_DOWN, BOX_RIGHT, BOX_LEFT, CHANGE_ROW, CHANGE_COL, BOX_FLUSH
}
from '../constant/BoxType'
const initialState = {
  row: 3,
  col: 3
}


export default function change(state = initialState, action) {
  return InitData(initialState)
}

function move(state, up, right, down, left) {
  var state = Object.assign({}, state),
    snaker = state.snaker,
    row = state.row,
    col = state.col,
    oldFirstNode = snaker[0];
  var oldFirstNode_x = oldFirstNode.x,
    oldFirstNode_y = oldFirstNode.y;
  var newFirstNode_x = rang(col - 1, 0, oldFirstNode_x - left + right),
    newFirstNode_y = rang(row - 1, 0, oldFirstNode_y - up + down);
  if (newFirstNode_x === oldFirstNode_x && newFirstNode_y === oldFirstNode_y) {
    return state;
  }


  //增加蛇头
  snaker.unshift({
      x: newFirstNode_x,
      y: newFirstNode_y
    })
    //去蛇尾

  if (!newFirstNode.food) {
    snaker.pop();
  }

  return state;
}

function rang(max, min, value) {
  return value > max ? max : (value < min ? min : value);
}


function InitData(obj, row = obj.row, col = obj.col) {
  var choose_x = obj.choose_x,
    choose_y = obj.choose_y;
  obj.row = row;
  obj.col = col;
  var rowData = [],
    textSet = getInitContnet(row, col);

  for (var i = 0; i < row; i++) {
    var cells = [];
    var rowObject = {
      y: i,
      cellData: cells
    };
    for (var j = 0; j < col; j++) {
      var dt = {
        x: j,
        y: i
      }
      addChoose(dt, obj);
      cells.push(dt)
    }

    rowData.push(rowObject);
  }

  var data = Object.assign({}, obj);
  data.rowData = rowData
  return data;
}

function getInitContnet(row, col) {
  var data = [],
    tem = [],
    rdata = [];
  for (var i = 0, len = row * col; i < len; i++) data.push(i);
  while (data.length > 0) {
    rdata.push(data.splice(~~(Math.random() * data.length), 1)[0]);
  }
  return rdata;
}

function addChoose(dt, obj) {
  if (dt.x == obj.choose_x && dt.y === obj.choose_y) {
    dt.choose = true;
  }
}