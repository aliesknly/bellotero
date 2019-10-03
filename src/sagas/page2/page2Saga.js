import { call, put, spawn, takeLatest } from 'redux-saga/effects'
//Actions
import * as types from '../../actions/actionTypes'
import { page2LoadFail, page2LoadSuccess } from '../../actions'
//API
import { apiGET } from '../../apiMethods'

const apiCALL = () => {
    return apiGET("page2.json").catch(err=>console.log(err))
}

const sagaRequest = function* sagaRequest() {
    try {
        const response = yield call(apiCALL);
        yield put(page2LoadSuccess(response.data.calculator))
    } catch (e) {
        yield put(page2LoadFail());
    }
};


const page2GetRequest = function* page2GetRequest() {
    yield takeLatest(types.PAGE2_LOAD_REQUEST, sagaRequest)
};

const page2Saga = function* page2Saga() {
    yield spawn(page2GetRequest)
};

export default page2Saga