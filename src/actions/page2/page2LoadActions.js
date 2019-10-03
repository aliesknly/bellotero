import * as types from '../actionTypes';

export const page1LoadRequest = () => ({
    type: types.PAGE1_LOAD_REQUEST
})
export const page1LoadFail = () => ({
    type: types.PAGE1_LOAD_FAIL
})
export const page1LoadSuccess = (payload) => ({
    type: types.PAGE1_LOAD_SUCCESS,
    payload
})
