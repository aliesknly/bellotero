import React from 'react';

const Label = ({ children }) => {
    return (
        <p style={styles}>
            {children}
        </p>
    )
};

const styles = {
    marginBottom: 0,
    font:"Roboto-Bold",
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#161616',
};

export default Label