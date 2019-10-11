import * as types from '../../actions/actionTypes'

export const initialState = {
    path: ""
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case types.LINK_CHANGE:
            return {
                path: payload
            };
        default:
            return state
    }
}