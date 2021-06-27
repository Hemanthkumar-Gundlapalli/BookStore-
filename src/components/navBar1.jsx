import React, { Component } from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


class NavBar extends Component {
    render() { 
        return <>
        <Navbar bg="dark" variant="dark" expand="lg md sm">
        <Container>
        <Navbar.Brand href="#home">Fashon Hub</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">About us</Nav.Link>
          <Nav.Link href="#pricing">Contact us</Nav.Link>
          <Nav.Item style={{width:"20px"}}><i class="fas fa-shopping-cart"></i></Nav.Item>
        </Nav>
        </Container>
      </Navbar>
      </>;
    }
}
 
export default NavBar;