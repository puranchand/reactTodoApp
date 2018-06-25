
import * as actionTypes from '../actions/ActionTypes'; 

const initialState = {
	data:false,
}

export default function (state = initialState,action){
	switch(action.type){
		case actionTypes.UPDATE_VALUE:
			return {...state,data:action.payload}
		default : 
			return state 

	}
}