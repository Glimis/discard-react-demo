import {
  BOX_UP, BOX_DOWN, BOX_RIGHT, BOX_LEFT
}
from '../constant/BoxType'

const initialState = [{
    x: 0,
    y: 0
  }]



//每次移动均会增加蛇头
//不计算是否超出范围
//不验证是否吃到自己
//不截取尾部
export default function change(snaker = new Snaker(initialState), action) {

  switch (action.type) {
    case BOX_UP:
        snaker.Up();
      return snaker;
    case BOX_DOWN:
        snaker.Dwon();
      return snaker;
    case BOX_RIGHT:
         snaker.Right();
      return snaker;
    case BOX_LEFT:
         snaker.Left();
      return snaker;
    default:
      return snaker;
  }
}


class Snaker{
  constructor(body){
    this.body=body
  }
  Up(){
    this.addHeader(1,0,0,0);
  }
  Right(){
    this.addHeader(0,1,0,0);
  }
  Dwon(){
    this.addHeader(0,0,1,0);
  }
  Left(){
    this.addHeader(0,0,0,1);
  }

  addHeader(up,right,down,left){
     var oldHeader=this.getHeader();
     var {x,y}=oldHeader;
     var _x=x-left+right,
      _y=y-up+down;
       this.body.unshift({
        x:_x,
        y:_y
       });
  }
  getHeader(){
    return this.body[0];
  }
  deleteTail(){
    this.body.pop();
  }
  eatFood(food){
    var {x,y}=this.getHeader();
     //若为食物,蛇长不变
    if(food.x===x&&food.y===y){
      return true;
    }else{
      this.deleteTail();
      return false;
    }
  }

}


