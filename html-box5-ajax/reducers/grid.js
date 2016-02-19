const defaultData = {
  rowsCount: 20,
  pageNum: 10,
  page: 1,
  data: [{
    name: 'name1',
    age: 'age1',
    sex: 'sex1'
  }, {
    name: 'name2',
    age: 'age2',
    sex: 'sex2'
  }]
}


export default function(state, action) {

  switch (action.type) {
    case 'ADD_TODO':
    default:
      return defaultData
  }
}