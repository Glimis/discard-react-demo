import _ from 'lodash'

/**
 * 编辑代号
 *
 * col:行
 * row:列
 *
 * 当任意一行为-1代表无编辑
 */
export default function change(state = {
  	col:-1,
  	row:-1
}, action) {
  switch(action.type){
    case "ChangeEditState":
		return action.edit;
    default:
      return state;
  }
}

