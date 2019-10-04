import React from 'react';

const Counter = ({ children }) => {
    return (
        <div className={"counter-value"} style={styles.box}>
            <h4 style={styles.value}>{children}</h4>
        </div>
    )
};

const styles = {
    box: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '67px',
        height: '52px',
        borderRadius: '4px',
        border: 'solid 1px #d6dcff',
        backgroundColor: '#ffffff',
    },
    value: {
        marginBottom: 0,
        marginRight: '10px',
        fontFamily: 'Roboto',
        fontSize: '36px',
        fontWeight: '500',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.11',
        letterSpacing: '0.77px',
        textSlign: 'right',
        color: '#161616',
    }
}

export default Counter