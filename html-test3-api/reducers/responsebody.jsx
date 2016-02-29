import _ from 'lodash'

/**
 * 返回结果维护
 */
export default function change(state = {
  	a:1,
  	b:2
}, action) {
  switch(action.type){
    case "ResponseBodyShow":
     //修改编辑状况
	return action.json;
    default:
      return state;
  }
}

