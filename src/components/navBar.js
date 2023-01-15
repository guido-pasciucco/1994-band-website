import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#action1">1994</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{maxHeight:'100px'}} navbarScroll>
                        <Nav.Link href="#action2">Nosotros</Nav.Link>
                        <Nav.Link href="#action3">Música</Nav.Link>
                        <Nav.Link href="#action4">Shows</Nav.Link>
                        <Nav.Link href="#action5">Merch</Nav.Link>
                        <Nav.Link href="#action6">Contacto</Nav.Link>
                    <Button variant="outline-success">Ayudanos!</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}


/*

El navbar va a ser así de izquierda a derecha
1994 (click y volves arriba de todo)
-- espacio --
nosotros (click y te baja hasta esa sección)
música (click y te baja hasta esa sección)
shows (click y te baja hasta esa sección)
merch (click y te baja hasta esa sección + sección aparte dedicada al ecommerce) 
contacto
ayudanos! (donaciones - cafecito para argentinos, paypal para resto del mundo)

*/

export default NavBar;