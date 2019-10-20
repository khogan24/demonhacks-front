import React from 'react';
import dabward  from './stock.svg';
import {Navbar,Nav} from 'react-bootstrap';
import {Col,Row,Container} from 'react-bootstrap'
import ReactSVG from 'react-svg'

import './Header.css';
function Header() {

    return (
        <Container class = "navbar-container" >
            
        <Navbar expand ="lg"class = "navbar-class" bg= 'dark' variant = 'dark'>
            <Navbar.Brand> <img src ="./stock.svg"></img></Navbar.Brand>
        </Navbar>

        

        </Container>
    );
}

export default Header;  