require('../less/index.less');
var React = require('react');

var Box = require('../component/Box');
var data={
      row :5,
      col:5,
      choose:{
        x:4,
        y:4
      }
    }
React.render( <Box data = {data} /> , document.body);
