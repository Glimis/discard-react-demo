var util = require('util'); 
function Person(){

}

Person.prototype.eat=function(){
	alert(1);
}

function Doubibily(){

}


util.inherits(Doubibily,Person);
console.log(Doubibily)
debugger