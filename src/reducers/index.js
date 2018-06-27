import {combineReducers} from 'redux';
import ActiveReducer from './reducers';

const allReducers = combineReducers({
	
	reducersdata: ActiveReducer

});

export default allReducers;