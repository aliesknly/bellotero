import * as types  from '../../actions/actionTypes';
const initialState = {
    loading: false,
    error: false
}

export default (state = initialState, { type }) => {
    switch (type) {
        case types.LOAD_MENU_REQUEST:
            return {
                loading: true,
                error: false
            }
        case types.LOAD_MENU_FAIL:
            return {
                loading: false,
                error: true
            }
        case types.LOAD_MENU_SUCCESS:
            return {
                loading: false,
                error: false
            }

        default:
            return state
    }

}