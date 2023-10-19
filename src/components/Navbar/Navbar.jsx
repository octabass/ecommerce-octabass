import { Link } from 'react-router-dom';

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
                <Navbar.Brand className="p-2 brand"><Link className='text-nav' to="/"><img src="../../../../public/ico.png" className="img-nav"alt="" />OctaBass</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="p-2 ms-auto">
                    <NavDropdown title="Bajos Eléctricos" id="basic-nav-dropdown" className="p-2 text-dark active">
                    <NavDropdown.Item><Link className='text-dark text-decoration-none' to='category/4-cuerdas'>4 cuerdas</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link className='text-dark text-decoration-none' to='category/5-cuerdas'>5 Cuerdas</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link className='text-dark text-decoration-none' to='category/6-cuerdas'>6 Cuerdas</Link></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item><Link className='text-dark text-decoration-none' to='category/fretless'>Fretless</Link></NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className="p-2 d-flex align-items-center"><Link className='text-dark text-decoration-none' to='category/amps'>Amplificadores</Link></Nav.Link>
                    <Nav.Link className="p-2 d-flex align-items-center"><Link className='text-dark text-decoration-none' to='category/acc'>Accesorios</Link></Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link className="p-2 d-flex align-items-center"><Link to='cart/'> <CartWidgets /></Link></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar