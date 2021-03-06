import * as types from '../../actions/actionTypes';


const initialState = {
    loading: false,
    error: false
}

export default (state = initialState, { type }) => {
    switch (type) {
        case types.PAGE2_LOAD_REQUEST:
            return { loading: true, error: false }
        case types.PAGE2_LOAD_FAIL:
            return { loading: false, error: true }
        case types.PAGE2_LOAD_SUCCESS:
            return { loading: false, error: false }
        default:
            return state;
    }
};