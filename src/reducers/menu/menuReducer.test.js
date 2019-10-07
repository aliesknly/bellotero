import menuReducer from './menuReducer';
import * as types from '../../actions/actionTypes';


describe('src/reducers/menu/menuReducer.js', () => {
    const initialState = {
        list:[]
    }
    
    it('returns the initial state', () => {
        expect(menuReducer(initialState, {})).toEqual({ list: [] })
    })

    

    it('return load menu success', () => {
        const list = [
            { text: "Testimonial", route: "page-1" },
            { text: "Configurator", route: "page-2" },
            { text: "Stories", route: "#" },
            { text: "About", route: "#" }
        ]

        expect(
            menuReducer(initialState,{type:types.LOAD_MENU_SUCCESS,list})
            ).toEqual()
    })
})