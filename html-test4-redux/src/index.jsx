import testStroe from '../stores/index'
import * as Action from '../actions'

const store = testStroe()

import test2Store from '../stores/test'

test("test1", function() {
    deepEqual(store.getState(), {
    	name:10,
    	age:10
    },'获取信息错误');


    store.dispatch(Action.ChangeName(3));

    deepEqual(store.getState(), {
    	name:3,
    	age:10
    },'修改获取信息错误');


});



const store2 = test2Store()

test("test2", function() {

    deepEqual(store2.getState().result.toArray(), [1,2],'result长度错误');
    deepEqual(store2.getState().entities.users.get("1"),{
		id: 1,
		name: 'Dan'
	},'users读取错误');

    store2.dispatch({
    	type:'ChangeUser',
    	id:1,
    	name:'liu'
    });

    
    deepEqual(store2.getState().entities.users.get("1"),{
		id: 1,
		name: 'liu'
	},'users读取错误');

});
