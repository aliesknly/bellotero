import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//Actions
import { page2LoadRequest } from '../../actions';
//Components
import Titles from '../Titles';
import { Col, Row ,Spinner} from 'reactstrap';
import Calculator from './Calculator';

const Configurator = ({ loading,information, page2LoadRequest }) => {
    useEffect(() => {
        page2LoadRequest()
    }, [page2LoadRequest]);

    return (
        (loading && <Spinner style={{ width: '16rem', height: '16rem'}} type="grow" />) ||
        <div>
            
            <Row>
                <Col sm='4' >
                    <Titles title={information.title} />
                    <br/>
                    <p style={styles.description}>
                        {information.description}
                    </p>
                </Col>
                <Col sm="1"/>
                <Col sm="7">
                    <Calculator/>
                </Col>
            </Row>
            
        </div>
    )
}

const styles = {
    description:{
        fontFamily: 'Roboto',
        fontSize: '16px',
        fontWeight: 'normal',
        fontstyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.5',
        letterSpacing: 'normal',
        color: '#161616',
    }
}

Configurator.propTypes = {
    loading:PropTypes.bool.isRequired,
    page2LoadRequest: PropTypes.func.isRequired,
    information:PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    loading:state.page2LoadStatusReducer.loading,
    information: state.page2Reducers.information,
})

const mapDispatchToProps = {
    page2LoadRequest
}


export default connect(mapStateToProps, mapDispatchToProps)(Configurator)