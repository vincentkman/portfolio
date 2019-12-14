import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

import Logo from '../../images/logo.png';

class Header extends React.Component {
    constructor() {
        super();
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <nav>
                <Navbar className='navbar default' color="transparent" light expand="md">
                    <NavbarBrand href="/"><img src={Logo} alt='logo' className='navbar-logo' /></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} className='navbar-toggler'/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem className='navbar-item'>
                                <Link exact to='/' id='link' className='nav-link navbar-link'>
                                    <i className='fas fa-home fa-1x icon' />HOME</Link>
                            </NavItem>
                            <NavItem className='navbar-item'>
                                <Link to='/about' id='link' className='nav-link navbar-link'>
                                    <i className="fas fa-user"></i>ABOUT</Link>
                            </NavItem>
                            <NavItem className='navbar-item'>
                                <Link to='/portfolio' id='link' className='nav-link navbar-link'>
                                    <i className="fas fa-tasks"></i>PORTFOLIO</Link>
                            </NavItem>
                            <NavItem className='navbar-item'>
                                <Link to='/contact' id='link' className='nav-link navbar-link'>
                                    <i className="fas fa-phone-alt"></i>CONTACT</Link>
                            </NavItem>
                            <NavItem className='navbar-item'>
                                <NavLink id='link' className='nav-link navbar-link' href="https://github.com/vincentkman/" target="_blank">
                                    <i className="fab fa-github-alt"></i>GITHUB</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </nav>
        );
    }
}

export default Header;