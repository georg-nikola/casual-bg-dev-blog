import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <Card>
        <Card.Body>
          <Card.Title>Casual blog</Card.Title>
          <Card.Text>
            To access the main content, please register.

            <Nav.Link as={Link} to="/register">Register</Nav.Link>
          </Card.Text>
        </Card.Body>
      </Card>
    );
};

export default Home