import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//Actions
import { page1PaginationNext, page1PaginationPrevious } from '../actions';
//Components
import { Button, ButtonGroup } from 'reactstrap'

const Pagination = ({ count, list, page1PaginationNext, page1PaginationPrevious }) => {

    const pagePrevious = () => {
        page1PaginationPrevious()
    };

    const pageNext = () => {
        page1PaginationNext()
    };

    return (
        <div style={styles.containerBox}>
            <div style={styles.pageBox}>
                <p className={"pagination-text"} style={styles.pageText}>{`${count + 1}/${list.length}`}</p>
            </div>
            <ButtonGroup>
                <Button disabled={count === 0 && true} onClick={pagePrevious} style={styles.pageButton}>{'<-'}</Button>
                <Button disabled={count === list.length - 1 && true} onClick={pageNext} style={styles.pageButton}>{'->'}</Button>
            </ButtonGroup>
        </div>
    )
};

const styles = {
    containerBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    pageBox: {
        width: '120px',
        height: '56px',
        backgroundColor: '#071eb3',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    pageText: {
        marginBottom: 0,
        lineHeight: 1,
        letterSpacing: '0.69px',
        color: '#ffffff',
    },
    pageButton: {
        width: '56px',
        height: '56px',
        backgroundColor: '#071eb3',
    }
};

Pagination.propTypes = {
    list: PropTypes.array.isRequired,
    count: PropTypes.number.isRequired,
    page1PaginationNext: PropTypes.func.isRequired,
    page1PaginationPrevious: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    list: state.page1Reducers.list,
    count: state.page1Reducers.count,
    information: state.page1Reducers.information,
});

const mapDispatchToProps = {
    page1PaginationNext,
    page1PaginationPrevious
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)