import fetch from 'isomorphic-fetch'

export const ChangePage = (num) => {
	return function(dispatch) {
		return fetch(`/moke/${num}.json`)
			.then(response => response.json())
			.then(function(json) {
				dispatch({
					type: 'ChangePage',
					json
				})
			})
	}
}