import { call, put, spawn, takeLatest } from 'redux-saga/effects'
//Actions
import * as types from '../../actions/actionTypes'
import { menuLoadFaild, menuLoadSuccess } from '../../actions'
//API
import { apiGET } from '../../apiMethods'

const apiCALL = () => {
    return apiGET("app.json").catch(err=>console.log(err))
}

const sagaRequest = function* sagaRequest() {
    try {
        const response = yield call(apiCALL);
        yield put(menuLoadSuccess(response.data.menu.items))
    } catch (e) {
        yield put(menuLoadFaild());
    }
};


const menuGetRequest = function* menuGetRequest() {
    yield takeLatest(types.LOAD_MENU_REQUEST, sagaRequest)
};

const menuSaga = function* menuSaga() {
    yield spawn(menuGetRequest)
};

export default menuSaga