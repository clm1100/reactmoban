import * as actionTypes from './constants';
import {fromJS} from 'immutable';
const defaultState = fromJS({
        asks:[],
        goods:[]
})

export default (state=defaultState,action)=>{
    switch (action.type){
        case actionTypes.CHANGE_ASKS:
            return state.set('asks',action.data);
        case actionTypes.CHANGE_GOODS:
            return state.set('goods',action.data);
        default:
            return state
    }
}