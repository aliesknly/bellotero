import { spawn } from 'redux-saga/effects';
import menuSaga from './menu/menuSaga';
import page1Saga from './page1/page1Saga';
import page2Saga from './page2/page2Saga';

const sagas = function* sagas() {
    //Example
    // yield spawn(checkAuthSaga);
    yield spawn(menuSaga)
    yield spawn(page1Saga)
    yield spawn(page2Saga)
}

export default sagas