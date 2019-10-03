import * as types from '../actionTypes';

export const page2LoadRequest = () => ({
    type: types.PAGE2_LOAD_REQUEST
})
export const page2LoadFail = () => ({
    type: types.PAGE2_LOAD_FAIL
})
export const page2LoadSuccess = (payload) => ({
    type: types.PAGE2_LOAD_SUCCESS,
    payload
})
