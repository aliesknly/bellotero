import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//Actions
import { page1LoadRequest } from '../../actions';
//Components
import Titles from '../Titles';
import { Col, Row } from 'reactstrap';
import ContentBox from '../ContentBox';

const Page1 = ({ title,information, page1LoadRequest }) => {
    useEffect(() => {
        page1LoadRequest()
    }, [page1LoadRequest])

    
    return (
        <div>
            <Row>
                <Col sm="5">
                    <Titles title={title} />
                </Col>
            </Row>
            <br />
            <br />
            <br />
            <Row>
                <Col>
                    <ContentBox information={information}/>
                </Col>
            </Row>
        </div>
    )
}

Page1.propTypes = {
    title: PropTypes.string.isRequired,
    page1LoadRequest: PropTypes.func.isRequired,
    information:PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    title: state.page1Reducers.title,
    information: state.page1Reducers.information,
})

const mapDispatchToProps = {
    page1LoadRequest
}


export default connect(mapStateToProps, mapDispatchToProps)(Page1)