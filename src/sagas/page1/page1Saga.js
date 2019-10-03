import { call, put, spawn, takeLatest } from 'redux-saga/effects'
//Actions
import * as types from '../../actions/actionTypes'
import { page1LoadFail, page1LoadSuccess } from '../../actions'
//API
import { apiGET } from '../../apiMethods'

const apiCALL = () => {
    return apiGET("page1").catch(err=>console.log(err))
}

const sagaRequest = function* sagaRequest() {
    try {
        const response = yield call(apiCALL);
        yield put(page1LoadSuccess(response.data.slider))
    } catch (e) {
        yield put(page1LoadFail());
    }
};


const page1GetRequest = function* page1GetRequest() {
    yield takeLatest(types.PAGE1_LOAD_REQUEST, sagaRequest)
};

const page1Saga = function* page1Saga() {
    yield spawn(page1GetRequest)
};

export default page1Saga