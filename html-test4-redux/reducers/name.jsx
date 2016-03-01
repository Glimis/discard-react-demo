export default function change(state=10, action) {
  switch(action.type){
    case "ChangeName":
		return action.name;
    default:
      return state;
  }
}

