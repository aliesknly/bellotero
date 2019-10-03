import React from 'react';

const Total = ({ children }) => {
    return (
        <div style={styles.box}>
            <p style={styles.signal}>$</p>
            <h1 style={styles.value}>
                {`${children}`}
            </h1>
        </div>
    )
}

const styles = {
    box:{
        display:'flex',
        flexDirection:'row',
        alignItems:"flex-end"
    },
    value: {
        fontFamily: 'Roboto',
        fontSize: '60pt',
        fontWeight: '500',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1',
        letterSpacing: '1px',
        textSlign: 'right',
        color: '#071eb3',
    },
    signal: {
        width: '22px',
        height: '40px',
        fontFamily: 'Roboto',
        fontSize: '36px',
        fontWeight: '500',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.11',
        letterSpacing: '0.77px',
        color: '#071eb3',
    }
}

export default Total