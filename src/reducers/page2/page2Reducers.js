import * as types from '../../actions/actionTypes';


const initialState = {
    information: {},
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case types.PAGE2_LOAD_SUCCESS:
            return {
                ...state,
                information: payload
            }
        default:
            return state;
    }
};