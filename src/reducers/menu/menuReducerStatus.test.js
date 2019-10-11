import menuReducerStatus, { initialState } from './menuReducerStatus'
import * as types from '../../actions/actionTypes';

describe('src/reducers/menu/menuReducerStatus.js', () => {
    it('return the inital state', () => {
        expect(menuReducerStatus(initialState, {})).toEqual(initialState)
    })

    it('return load menu request', () => {
        expect(
            menuReducerStatus(initialState, { type: types.LOAD_MENU_REQUEST })
        ).toEqual({ loading: true, error: false })
    })

    it('return load menu fail', () => {
        expect(
            menuReducerStatus(initialState, { type: types.LOAD_MENU_FAIL })
        ).toEqual({ loading: false, error: true })
    })

    it('return load menu success', () => {
        expect(
            menuReducerStatus(initialState, { type: types.LOAD_MENU_SUCCESS })
        ).toEqual({ loading: false, error: false })
    })
})