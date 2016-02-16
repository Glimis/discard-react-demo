var React = require('react');
var Row = require('./Row');

class Box extends React.Component {
        //构造函数,取消了getInitialState
        constructor(props) {
            super(props);
             this.state=this.props.data;
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
                    state = this.props.onUp();
                } else if (e.keyCode === 38) {
                    state =this.props.onRight();
                } else if (e.keyCode === 39) {
                    state = this.props.onDown();

                } else if (e.keyCode === 40) {
                    state = this.props.onLeft();
                }
                if (state) {
                    this.setState(state);
                }
            }

        }

        module.exports = Box;
