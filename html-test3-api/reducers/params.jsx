/**
 * 输入框对象
 * 
 */
export default function change(state = {
  url:"http://admin.willclass.com/api/Article/show",
  data:[["id","111"]]
}, action) {
	  switch(action.type){
	    case "ChangeUrl":
	     	//修改编辑状况
	     	state=Object.assign({},state);
	     	state.url=action.url;
			return state;
		case "ChangeParams":
			state=Object.assign({},state);
			let params=state.data;
			let p=action.params;
			if(!params[p.row]){
				params[p.row]=['',''];
			}
			params[p.row][p.col]=p.value;	
			return state;
	    default:
	      return state;
	  }
 }