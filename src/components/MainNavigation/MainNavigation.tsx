import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/esm/Nav';
import Navbar from 'react-bootstrap/esm/Navbar';
import { Link } from 'react-router-dom';
import './MainNavigation.scss';

export const MainNavigation: React.FC = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
        >
          Home
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/photos">
            Photos
          </Nav.Link>

          <Nav.Link as={Link} to="/todos">
            Todos
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
