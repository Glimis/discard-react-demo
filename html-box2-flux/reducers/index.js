function init() {
    var data = {
        row: 5,
        col: 5,
        choose: {
            x: 4,
            y: 4
        }
    };
    var row = data.row,
        col = data.col;
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

    data.rowData = rowData;
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

function changeContent(state, up, right, down, left) {
    var choose = state.choose;
    //当前选择坐标
    var x = choose.x,
        y = choose.y,
        text = state.rowData[y].cellData[x].text;
    //交互坐标
    var _x = x - left + right,
        _y = y + down - up;
    //交换坐标限制
    var maxX = state.col - 1,
        maxY = state.row - 1;
    _x = (_x > 0) ? (_x > maxX ? maxX : _x) : 0;
    _y = (_y > 0) ? (_y > maxY ? maxY : _y) : 0;

    var _text =state.rowData[_y].cellData[_x].text;

    if (text != _text) {
        state.rowData[y].cellData[x].text = _text;
        state.rowData[_y].cellData[_x].text = text;
        state.choose.x = _x;
        state.choose.y = _y;
    }
    return state;
}

module.exports = function box(state, action) {
    state = state || init();
    
    switch (action.type) {
        case 'UP':
            return changeContent(state,0, 1, 0, 0)
        case 'DOWN':
            return changeContent(state,0, 0, 0, 1)
        case 'LEFT':
            return changeContent(state,1, 0, 0, 0)
        case 'RIGHT':
            return changeContent(state,0, 0, 1, 0)
        default:
            return state
    }
}
