import React, {Component} from 'react'

class InputRange extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: {}
        }
    }

    componentDidMount = () => {

    };


    render() {
        return (

            <div>
                <div className="mdc-slider mdc-slider--discrete" tabIndex="0" role="slider"
                     aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"
                     aria-label="Select Value">
                    <div className="mdc-slider__track-container">
                        <div className="mdc-slider__track"></div>
                    </div>
                    <div className="mdc-slider__thumb-container">
                        <div className="mdc-slider__pin">
                            <span className="mdc-slider__pin-value-marker"></span>
                        </div>
                        <svg className="mdc-slider__thumb" width="21" height="21">
                            <circle cx="10.5" cy="10.5" r="7.875"></circle>
                        </svg>
                        <div className="mdc-slider__focus-ring"></div>
                    </div>
                </div>
            </div>
        )
    }

}

export default InputRange