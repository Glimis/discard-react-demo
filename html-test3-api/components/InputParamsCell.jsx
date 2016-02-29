import React from 'react'
import _  from 'lodash'
export default class InputParamsCell extends React.Component {
    componentDidUpdate () {
        this.focus();
    }
    componentDidMount(){
        this.focus();
    }
    render() {
        var {col,row,edit}=this.props;
        
            if(edit.col==col&&edit.row==row){
             return  <td tabIndex ="0"  ><input onKeyDown={this.onKeyDown.bind(this)} onChange={this.onChange.bind(this)} onBlur={this.onBlur.bind(this)} ref='input' onClick={(e)=>{
               e.stopPropagation()
             }} value={this.props.text}/></td> ;
          }
          return  <td tabIndex = "0" onFocus={this.changeEditState.bind(this)}><span>{this.props.text}&nbsp;</span></td> ;
    }
    focus(){
           let input;
        if(input=this.refs.input){
            input.focus()}
    }


    changeEditState(){
        var {col,row,dispatch}=this.props;
        dispatch({
            type:"ChangeEditState",
            edit:{
                col:col,
                row:row
            }
        })
    }
    onChange(){
        var { col,row,dispatch}=this.props;
        
        dispatch({
            type:"ChangeParams",
            params:{
                col:col,
                row:row,
               value:this.refs.input.value
            }
        })

      
    }

    onKeyDown(e){
       var {dispatch,row,col}=this.props;
       if(e.keyCode===13){
        if(col===0){
            dispatch({
                type:"ChangeEditState",
                edit:{
                     col:1,
                    row:row
                }
            })
           }else{
            dispatch({
                type:"ChangeEditState",
                edit:{
                     col:-1,
                    row:-1
                }
            })
           }
        }
    }

    onBlur(){
        var {name,dispatch,code}=this.props;
     
        dispatch({
            type:"ChangeEditState",
            edit:{
                 col:-1,
                row:-1
            }
        })
    }
}