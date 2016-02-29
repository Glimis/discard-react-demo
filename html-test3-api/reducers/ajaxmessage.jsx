/**
 * ajax请求参数
 */
export default function change(state = {
  url:"http://admin.willclass.com/api/Article/show",
  body:{},
  method:"POST"
}, action) {
  switch(action.type){
    case "ChangeAjaxMessage":
      state=Object.assign({},state);
      return state; 
    default:
      return state;
  }
}