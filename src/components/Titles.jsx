import React from 'react';

const Titles = ({ title }) => {
    return (
        <div style={styles.box}>
            <h1 style={styles.title}>{title}</h1>
        </div>
    )
}

const styles = {
    box: {
        height: '56px',
        backgroundColor: '#071eb3',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'stretch',

    },
    title: {
        height: '40px',
        fontFamily: 'Roboto-Black',
        fontSize: '36px',
        fontWeight: '900',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.11',
        letterSpacing: '0.77px',
        color: '#ffffff',
    }
}

export default Titles