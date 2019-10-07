import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
//ACTIONS
import {menuLoadRequest, linkChange} from '../actions';
//Components
import {
    Container,
    Navbar,
    NavbarBrand,
} from 'reactstrap'
import ItemMenu from "./menu/ItemMenu";


const Header = ({list, menuLoadRequest, linkChange, path}) => {
    useEffect(() => {
        linkChange(window.location.pathname);
        menuLoadRequest();
        return function cleanup() {

        }
    }, [linkChange, menuLoadRequest]);

    return (

        <Navbar className="Header" light expand="md">
            <Container>
                <div className={'col-6'}>
                    <NavbarBrand href="/"><img height={'26'} src="bellotero.png" alt="logo"/></NavbarBrand>
                </div>

                <div className="col-6 menu-items">
                    {
                        list.map((item, key) => (
                            <ItemMenu linkChange={linkChange} path={path} key={key}>{item}</ItemMenu>
                        ))
                    }
                </div>
            </Container>
        </Navbar>
    )
};


Header.propTypes = {
    list: PropTypes.array.isRequired,
    path: PropTypes.string.isRequired,
    menuLoadRequest: PropTypes.func.isRequired,
    linkChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    list: state.menuReducer.list,
    path: state.linkReducer.path,
});

const mapDispatchToProps = {
    menuLoadRequest,
    linkChange
};

export default connect(mapStateToProps, mapDispatchToProps)(Header) 