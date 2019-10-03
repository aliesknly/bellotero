import { spawn } from 'redux-saga/effects';
import menuSaga from './menu/menuSaga';
import page1Saga from './page1/page1Saga';

const sagas = function* sagas() {
    //Example
    // yield spawn(checkAuthSaga);
    yield spawn(menuSaga)
    yield spawn(page1Saga)
}

export default sagas