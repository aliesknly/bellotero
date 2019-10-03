import {combineReducers} from 'redux'
import menuReducerStatus from './menu/menuReducerStatus';
import menuReducer from './menu/menuReducer';
import page1Reducers from './page1/page1Reducers';
import page1LoadStatusReducer from './page1/page1LoadStatusReducer';
import page2Reducers from './page2/page2Reducers';
import page2LoadStatusReducer from './page2/page2LoadStatusReducer';

export default combineReducers({
    //MENU
    menuReducer,
    menuReducerStatus,
    //PAGE1
    page1Reducers,
    page1LoadStatusReducer,
    //PAGE2
    page2Reducers,
    page2LoadStatusReducer,
});