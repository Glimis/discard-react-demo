import _ from 'lodash'

/**
 * 返回请求维护
 */
export default function change(state = {
  	
}, action) {
  switch(action.type){
    case "ResponseShow":
     //修改编辑状况
	return action.response;
    default:
      return state;
  }
} 


