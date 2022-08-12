import { Link } from 'react-router-dom'

import { useAuthContext } from '../../contexts/AuthContext';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  const { user } = useAuthContext();
  return (
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            {user.email
              ? <>
                <Nav.Link as={Link} to="/catalog">Catalog</Nav.Link>
                <Nav.Link as={Link} to="/create">Create Blog</Nav.Link>
                <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
              </>
              : <>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/register">Register</Nav.Link>
              </>
            }
          </Nav>
        </Container>
      </Navbar>
  );
}

export default Header;