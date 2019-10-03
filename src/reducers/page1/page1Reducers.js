import * as types from '../../actions/actionTypes';


const initialState = {
    title: "",
    list: [],
    information: {},
    count: 0

}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case types.PAGE1_LOAD_SUCCESS:
            return {
                ...state,
                list: state.list.concat(payload.reviews),
                title: payload.title,
                information: payload.reviews[state.count]
            }
        case types.PAGE1_PREVIOUS:
            return {
                ...state,
                information: state.list[state.count - 1],
                count: state.count - 1
            }
        case types.PAGE1_NEXT:
            return {
                ...state,
                information: state.list[state.count + 1],
                count: state.count + 1
            }
        default:
            return state;
    }
};