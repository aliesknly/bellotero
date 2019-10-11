import page1LoadStatusReducer, { initialState } from './page1LoadStatusReducer';
import * as types from '../../actions/actionTypes';

describe("src/reducers/page1/page1LoadStatusReducer.js", () => {
    it("return de initial state", () => {
        expect(page1LoadStatusReducer(initialState, {})).toEqual({ error: false, loading: false })
    })

    it(`return PAGE1_LOAD_REQUEST`, () => {
        expect(
            page1LoadStatusReducer(initialState, { type: types.PAGE1_LOAD_REQUEST })
        ).toEqual({ loading: true, error: false })
    })

    it(`return PAGE1_LOAD_FAIL`, () => {
        expect(
            page1LoadStatusReducer(initialState, { type: types.PAGE1_LOAD_FAIL })
        ).toEqual({ loading: false, error: true })
    })

    it(`return PAGE1_LOAD_SUCCESS`, () => {
        expect(
            page1LoadStatusReducer(initialState, { type: types.PAGE1_LOAD_SUCCESS })
        ).toEqual({ loading: false, error: false })
    })
})