import React, { useState ,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
//ACTIONS
import {menuLoadRequest} from '../actions';
//Componets
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap'


const Header = ({list, menuLoadRequest}) => {
    const [toggle, setToggle] = useState(false)

    useEffect(()=>{
        menuLoadRequest()
        return function cleanup() {

        }
    },[!list])
    
    
    const handleToggle = () => {
        setToggle(!toggle)
    }
    return (
        <div>
            <Navbar color="light" light expand="md">
                <Container>
                    <NavbarBrand href="/"><img src="bellotero.png" alt="logo" /></NavbarBrand>
                    <NavbarToggler onClick={handleToggle} />
                    <Collapse isOpen={toggle} navbar>
                        <Nav className="ml-auto" navbar>
                            {
                                list.map((item, key) => (
                                    <NavItem key={key}>
                                        <Link to={item.route}>{item.text}</Link>
                                    </NavItem>
                                ))
                            }
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

Header.propTypes = {
    list: PropTypes.array,
    menuLoadRequest:PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    list: state.menuReducer.list,
})

const mapDispatchToProps = {
    menuLoadRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(Header) 