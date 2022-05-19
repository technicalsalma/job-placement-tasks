import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleLogOut = () =>{
        signOut(auth);
    }

    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
          <Container>
            <Navbar.Brand href="/home">Job Placement Tasks</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/home">
                  Home
                </Nav.Link>
                {user && (
                  <Nav.Link as={Link} to="/managetask">
                    ManageTask
                  </Nav.Link>
                )}
              </Nav>
              <Nav>
                {user ? (
                  <Button onClick={handleLogOut} variant="primary">
                    Logout
                  </Button>
                ) : (
                  <Button as={Link} to="/login" variant="primary">
                    Login
                  </Button>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default Header;