import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Header() {
    return (
        <Navbar bg='primary' data-bs-theme="dark">
            <Container>
                <Navbar.Brand href='/'>Andrew's Portfolio</Navbar.Brand>
                <Nav>
                    <Nav.Link href='/home'>Home</Nav.Link>
                    <Nav.Link href='/about'>About Me</Nav.Link>
                    <Nav.Link href='/projects'>Projects</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;