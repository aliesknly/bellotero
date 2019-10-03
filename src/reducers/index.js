import {combineReducers} from 'redux'
import menuReducerStatus from './menu/menuReducerStatus';
import menuReducer from './menu/menuReducer';
import page1Reducers from './page1/page1Reducers';
import page1LoadStatusReducer from './page1/page1LoadStatusReducer';

export default combineReducers({
    //MENU
    menuReducer,
    menuReducerStatus,
    //PAGE1
    page1Reducers,
    page1LoadStatusReducer,
});