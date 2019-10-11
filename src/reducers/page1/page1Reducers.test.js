import page1Reducers, { initialState } from './page1Reducers';
import * as types from '../../actions/actionTypes';

describe("src/reducers/page1/page1Reducers.js", () => {
    const data = {
        slider: {
            title: "Our customers love us",
            reviews: [{
                name: "Pete Zahut",
                position: "Chief  Maniak",
                comment: "It's funny what memory does, isn't it? My favorite holiday tradition might not have happened more than once or twice. But because it is such a good memory, so encapsulating of everything I love about the holidays, in my mind it happened every year. Without fail"
            }, {
                name: "Bernabe",
                position: "Tech Lead  Maniak",
                comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed lectus quam. Curabitur ultricies pretium orci nec finibus. Nullam congue quis tortor a tempus. Morbi rutrum, nunc at hendrerit gravida, tortor turpis molestie nibh, vel varius augue ante eu velit."
            }]
        }
    }


    it("return initial state", () => {
        expect(page1Reducers(initialState, {})).toEqual(initialState)
    })

    it('return PAGE1_LOAD_SUCCESS', () => {
        expect(
            page1Reducers(initialState, { type: types.PAGE1_LOAD_SUCCESS, payload: data.slider })
            ).toEqual(
                {
                    count:0,
                    list:data.slider.reviews,
                    title:data.slider.title,
                    information:data.slider.reviews[0]
                }
            )
    })
})