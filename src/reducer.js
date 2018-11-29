import * as constants from "./constants"
import {Provider, connect} from 'react-redux'
import {createStore} from 'redux'
const initialState = {
     items:[],
     text:''
};

export const Reducer =  (state =initialState ,action) => {

    let newState
    switch (action.type) {

        case constants.TEXT_CHANGED:
            state = {...state, text: action.text}
            break;

        case    constants.TAG_SEARCH:
            state = {...state, items: action.items}
            break;


     }

    return state;

}


