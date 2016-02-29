import _ from 'lodash'

import {combineReducers}from 'redux'
import ajaxmessage from './ajaxmessage'
import edit from './edit'
import params from './params'
import response from './response'
import responsebody from './responsebody'

export default   combineReducers({
	ajaxmessage,
	edit,
	params,
	response,
	responsebody
})



 function change(state={
	msg:'请输入url',

},action){

	switch(action.type){
		case "ShowJson":
			var newState=_.cloneDeep(state);
			newState.json=action.json;
			delete newState.msg;
			return newState;
		case "ChangeState":
		//修改编辑状况
			var newState=_.cloneDeep(state);
			_.merge(newState.edit, action.params);
			return newState;
		case "ChangeParams":
			//修改参数内容
			var newState=_.cloneDeep(state);
			var params=newState.params;
			var p=action.params;
			if(!params[p.row]){
				params[p.row]=['',''];
			}
			params[p.row][p.col]=p.value;
			return newState;
		case "ChangeUrl":
			var newState=_.cloneDeep(state);
			newState.url=action.url;
			return newState;	
		case "ConsoleShow":
			var newState=_.cloneDeep(state);
			newState.response=action.response;
			return newState;	
		default:
			return state;
	}
	
}