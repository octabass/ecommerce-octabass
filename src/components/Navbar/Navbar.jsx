import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgets from '../CartWidgets/CartWidgets';
import './Navbar.css'

const NavBar = () => {
    return (
        <Navbar expand="lg" className="bg-light nav-estilo" direction="horizontal" gap={4}>
            <Container>
                <Navbar.Brand href="#home" className="p-2">OctaBASS</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="p-2 ms-auto">
                    <NavDropdown title="Bajos Eléctricos" id="basic-nav-dropdown" className="p-2">
                    <NavDropdown.Item href="#action/3.1">4 cuerdas</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">5 Cuerdas</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">6 Cuerdas</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Fretless</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#amplificadores" className="p-2 d-flex align-items-center">Amplificadores</Nav.Link>
                    <Nav.Link href="#accesorios" className="p-2 d-flex align-items-center">Accesorios</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#carrito" className="p-2 d-flex align-items-center">0 <CartWidgets /></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar