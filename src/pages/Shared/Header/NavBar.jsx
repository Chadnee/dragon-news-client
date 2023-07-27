import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
          <Navbar collapseOnSelect expand="lg"  className="bg-body-secondary mx-3 rounded ounded-pill border">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto text-danger my-2">
            <Link className='text-decoration-none text-secondary fw-bold  pe-5' to = "/">Home</Link>
            <Link className='text-decoration-none text-secondary fw-bold  pe-5' to = "/about">About</Link>
            <Link className='text-decoration-none text-secondary fw-bold  pe-5' to = "">Profile</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default NavBar;