import {combineReducers} from 'redux-immutable'
// import {combineReducers} from 'redux';
import {reducer as adminclocklistReducer} from '../application/AdminClockList/store/index';
export default combineReducers({
    adminclocklist: adminclocklistReducer
})
