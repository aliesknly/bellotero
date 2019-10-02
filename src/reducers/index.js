import {combineReducers} from 'redux'
import menuReducerStatus from './menu/menuReducerStatus';
import menuReducer from './menu/menuReducer';

export default combineReducers({
    menuReducer,
    menuReducerStatus,
});