import linkReducer,{initialState} from "./linkReducer";
import *as types from '../../actions/actionTypes'

describe('src/redurcers/menu/linkReducer.js', () => {
    it('return the initial state', () => {
        expect(linkReducer(initialState,{})).toEqual({path:""})
    })

    it('return the link change',()=>{
        expect(
            linkReducer(initialState,{type:types.LINK_CHANGE,payload:"page-link"})
            ).toEqual({path:"page-link"})
    })
});