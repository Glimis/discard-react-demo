const defaultData = {
  msg: '初始化ing'
}


export default function(state, action) {

  switch (action.type) {
    case 'ChangePage':
      return action.json;
    default:
      return defaultData
  }
}