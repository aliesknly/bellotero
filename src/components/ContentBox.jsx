import React from 'react';
import { Row, Col } from 'reactstrap';

const ContentBox = () => {
    return (
        <div style={styles.box}>
            <Row>
                <Col sm="4">
                    <h2 style={styles.name}>Pete Zahut</h2>
                    <p style={styles.position}>Chef @ Maniak</p>
                </Col>
                <Col sm="8">
                    <p style={styles.coment}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iusto totam dolore praesentium animi, magni illo. Vitae quas consectetur at consequatur accusamus aperiam, ducimus perferendis soluta est dicta fugit quasi?
                   </p>
                </Col>
            </Row>
        </div>
    )
}

const styles = {
    box: {
        padding: '10px',
        paddingLeft: '20px',
        backgroundColor: '#ffffff',
    },
    coment: {
        width: '565px',
        height: '190px',
        fontFamily: 'Roboto',
        fontSize: '24px',
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.33',
        letterSpacing: 'normal',
        color: '#161616',
    },
    name: {
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
    }

}


export default ContentBox