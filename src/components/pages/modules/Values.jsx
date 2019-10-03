import React from 'react';

const Values = ({ children }) => {
    return (
        <div style={styles.box}>
            <p style={styles.signal}>$</p>
            <h4 style={styles.value}>{children}</h4>
        </div>
    )
}

const styles = {
    box: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
        width: '190px',
        height: '52px',
        borderRadius: '4px',
        border: 'solid 1px #d6dcff',
        backgroundColor: '#ffffff',
    },
    value: {
        marginBottom: 0,
        width: '117px',
        height: '40px',
        fontFamily: 'Roboto',
        fontSize: '36px',
        fontWeight: '500',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.11',
        letterSpacing: '0.77px',
        textSlign: 'right',
        color: '#161616',
    },
    signal: {
        marginLeft: '10px',
        marginBottom: 0,
        width: '15px',
        height: '40px',
        opacity: 0.24,
        fontFamily: 'Roboto',
        fontSize: '24px',
        fontWeight: '500',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.67,
        letterSpacing: '0.51px',
        color: '#161616',
    }
}

export default Values