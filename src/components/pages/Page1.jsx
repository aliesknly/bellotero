import React from 'react';
import Titles from '../Titles';
import {Col,Row} from 'reactstrap';
import ContentBox from '../ContentBox';

const Page1 = () =>{
    return(
        <div>
            <Row>
                <Col sm="5">
                    <Titles title="Our customers love us"/>
                </Col>
            </Row>
            <br/>
            <br/>
            <br/>
            <Row>
                <Col>
                    <ContentBox></ContentBox>
                </Col>
            </Row>
        </div>
    )
}

export default Page1