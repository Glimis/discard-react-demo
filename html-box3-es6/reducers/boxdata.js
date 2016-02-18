import {
  BOX_UP, BOX_DOWN, BOX_RIGHT, BOX_LEFT, CHANGE_ROW, CHANGE_COL, BOX_FLUSH
}
from '../constant/BoxType'

const initialState = {
  row: 3,
  col: 3,
  choose_x: 0,
  choose_y: 0
}

const initialData = InitData(initialState)



export default function change(state = initialState, action) {
  switch (action.type) {
    case BOX_UP:
      return move(state, 1, 0, 0, 0);
    case BOX_DOWN:
      return move(state, 0, 0, 1, 0);
    case BOX_RIGHT:
      return move(state, 0, 1, 0, 0);
    case BOX_LEFT:
      return move(state, 0, 0, 0, 1);
    case CHANGE_ROW:
      return InitData(initialState, action.num)
    case CHANGE_COL:
      return InitData(initialState, undefined, action.num)
    case BOX_FLUSH:
      return InitData(initialState)
    default:
      return initialData
  }
}

function move(state, up, right, down, left) {
  var state = Object.assign({}, state);
  var choose_x = state.choose_x,
    choose_y = state.choose_y,
    row = state.row,
    col = state.col;
  var x = rang(col - 1, 0, choose_x - left + right),
    y = rang(row - 1, 0, choose_y - up + down);
  if (x === choose_x && y == choose_y) {
    return state;
  }
  //位置交换
  //获取celldata
  var oldChoose = state.rowData[choose_y].cellData[choose_x],
    newChoose = state.rowData[y].cellData[x];
  //修改冗余标记
  oldChoose.choose = false;
  newChoose.choose = true;
  //修改内容
  var text = oldChoose.text;
  oldChoose.text = newChoose.text;
  newChoose.text = text;
  //修改标记
  state.choose_x = x;
  state.choose_y = y;
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
        y: i,
        text: textSet.pop()
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