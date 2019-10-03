import React from 'react';
import { Row, Col } from 'reactstrap';
import Pagination from './Pagination';

const ContentBox = ({information}) => {
    const {name, position,comment} = information;
    return (
        <div style={styles.box}>
            <Row>
                <Col sm="4">
                    <h2 style={styles.name}>{name}</h2>
                    <p style={styles.position}>{position}</p>
                </Col>
                <Col sm="8">
                        <p style={styles.comment}>{comment}
                    </p>
                    <Row>
                        <Col/>
                        <Col>
                            <Pagination style={styles.pagination}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
};

const styles = {
    box: {
        padding: '10px',
        paddingLeft: '20px',
        backgroundColor: '#ffffff',
    },
    comment: {
        fontFamily: 'Roboto',
        font:'Roboto-Bold',
        fontSize: '24px',
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.33',
        letterSpacing: 'normal',
        color: '#161616',
    },
    name: {
        font:'Roboto-Bold',
        fontFamily: 'Roboto',
        fontSize: '32px',
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.5',
        letterSpacing: 'normal',
        color: '#161616'
    },
    position: {
        font:'Roboto-Regular',
        width: '95px',
        height: '16px',
        fontFamily: 'Roboto',
        fontSize: '14px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#a5a5a5',
    },
    pagination: {
        alignSelf: "flex-end",
    }

};


export default ContentBox