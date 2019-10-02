import * as types  from '../actionTypes'

export const menuLoadRequest = () => (
    {
        type: types.LOAD_MENU_REQUEST
    }
)
export const menuLoadFaild = () => (
    {
        type: types.LOAD_MENU_FAIL
    }
)
export const menuLoadSuccess = (payload) => (
    {
        type: types.LOAD_MENU_SUCCESS,
        payload
    }
)