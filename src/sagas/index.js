import {spawn} from 'redux-saga/effects';
import menuSaga from './menu/menuSaga';


const sagas = function* sagas() {
    //Example
   // yield spawn(checkAuthSaga);
   yield spawn(menuSaga)
}

export default sagas