import * as types from '../../actions/actionTypes';

const initialState = {
    list: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case types.LOAD_MENU_SUCCESS:
            return {
                list: payload
            }

        default:
            return state
    }
}