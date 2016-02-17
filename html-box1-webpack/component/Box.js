var React = require('react');
var Row = require('./Row');

class Box extends React.Component {
        //构造函数,取消了getInitialState
        constructor(props) {
            super(props);
            var data = this.props.data;
            var row = data.row,
                col = data.col;
            var rowData = [],
                textSet = this.getInitContnet(row, col);

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
            this.state = data;
        }

        render() {
            var state = this.state;
            var rowData = this.state.rowData,
                html = [];
            for (var i = 0; i < rowData.length; i++) {
                var rowObject = rowData[i];
                html.push( < Row ref = {
                        "row" + i
                    }
                    row = {
                        rowObject
                    }
                    box = {
                        state
                    }
                    />);
                }
                return <div tabIndex = "-1"
                onKeyDown = {
                    this.onKeyDown.bind(this)
                }
                className = "boxs" > {
                    html
                } < /div>
            }
            onKeyDown(e) {
                var state;
                if (e.keyCode === 37) {
                    state = this.changeContent(0, 1, 0, 0);
                } else if (e.keyCode === 38) {
                    state = this.changeContent(0, 0, 1, 0);
                } else if (e.keyCode === 39) {
                    state = this.changeContent(0, 0, 0, 1);

                } else if (e.keyCode === 40) {
                    state = this.changeContent(1, 0, 0, 0);
                }
                if (state) {
                    this.setState(state);
                }
            }
            getInitContnet(row, col) {
                var data = [],
                    tem = [],
                    rdata = [];
                for (var i = 0, len = row * col; i < len; i++) data.push(i);
                while (data.length > 0) {
                    rdata.push(data.splice(~~(Math.random() * data.length), 1)[0]);
                }
                return rdata;
            }
            changeContent(up, right, down, left) {
                var state = this.state;
                var choose = state.choose;
                //当前选择坐标
                var x = choose.x,
                    y = choose.y,
                    text = this.refs["row" + y].refs["col" + x].props.cell.text;
                //交互坐标
                var _x = x - left + right,
                    _y = y + down - up;
                //交换坐标限制
                var maxX = state.col - 1,
                    maxY = state.row - 1;
                _x = (_x > 0) ? (_x > maxX ? maxX : _x) : 0;
                _y = (_y > 0) ? (_y > maxY ? maxY : _y) : 0;

                var _text = this.refs["row" + _y].refs["col" + _x].props.cell.text;

                if (text != _text) {
                    state.rowData[y].cellData[x].text = _text;
                    state.rowData[_y].cellData[_x].text = text;
                    state.choose.x = _x;
                    state.choose.y = _y;
                }
                return state;
            }
        }

        module.exports = Box;
