export default function change(state = 10, action) {
  switch(action.type){
    case "ChangeAge":
		return action.age;
    default:
      return state;
  }
}

