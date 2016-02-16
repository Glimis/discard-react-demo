require('../less/index.less');
var React =require('react')
var Box =require('../component/Box')
var Redux =require('redux')
var Reducers =require('../reducers')
var ReactDOM= require('react-dom');
const store = Redux.createStore(Reducers)


function render(){
ReactDOM.render( <Box data = {store.getState()} onUp={function(){
       store.dispatch({ type: 'UP' })
      }} onDown={function(){
       store.dispatch({ type: 'DOWN' })
      }} onRight={function(){
       store.dispatch({ type: 'RIGHT' })
      }} onLeft={function(){
       store.dispatch({ type: 'LEFT' })
      }} /> , document.getElementById('root'));
}

render()
store.subscribe(render)