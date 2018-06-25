import {combineReducers} from 'redux';
import Reducer from './reducers';

const allReducers = combineReducers({
	
	reducer: Reducer

});


export default allReducers;