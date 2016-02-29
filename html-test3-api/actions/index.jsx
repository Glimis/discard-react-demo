import fetch from 'isomorphic-fetch'




//修改地址
export const ChangeUrl=(url)=>{
	return {
			type: 'ChangeUrl',
			url
		}
}

//修改编辑状态
export const ChangeEditState=(edit)=>{
	return {
			type: 'ChangeEditState',
			edit
		}
}

//请求
export const Access = (ajaxmessage,params) => {
	return function(dispatch) {
		return fetch(ajaxmessage.url,{
			 method: ajaxmessage.method,
			 // credentials: 'include',
			 body:ajaxmessage.method.toLocaleLowerCase()==='POST'?JSON.stringify(params):undefined
		})
			.then(response =>{
				dispatch({
					type: 'ResponseShow',
					response
				})
				return response.json();
			})
			.then((json)=>{
				dispatch({
					type: 'ResponseBodyShow',
					json
				})
			})
	}
}

export const ChangeAjaxMessage=(json)=>{
	return {
			type: 'ChangeAjaxMessage',
			json
		}
}



