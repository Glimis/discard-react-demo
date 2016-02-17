import {
  BOX_UP, BOX_DOWN, BOX_RIGHT, BOX_LEFT
}
from '../constant/BoxType'

const initialState = {
  row: 3,
  col: 3
}

const initialData = InitData(initialState.row, initialState.col)



export default function change(state = initialData, action) {
  return initialData;
}


function InitData(row, col) {

  var rowData = [],
    textSet = getInitContnet(row, col);

  for (var i = 0; i < row; i++) {
    var cells = [];
    var rowObject = {
      y: i,
      cellData: cells
    };
    for (var j = 0; j < col; j++) {
      cells.push({
        x: j,
        y: i,
        text: textSet.pop()
      })
    }

    rowData.push(rowObject);
  }

  return rowData;
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