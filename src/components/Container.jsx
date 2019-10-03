import React from 'react';
//Components
import Header from './Header';
import { Container as Body } from 'reactstrap';

const Container = ({ children }) => {
    return (
        <div>
            <Header />
            <Body className="BodyPart">
                {children}
            </Body>
        </div>
    )
};

export default Container