import * as types from './ActionTypes';
// import axios from 'axios'

export function updateValue(bool){
    return {
        type: types.UPDATE_VALUE,
        payload: bool,
    };
}

