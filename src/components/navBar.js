
import {Button, Container, Nav, Navbar} from 'react-bootstrap';
function NavBar() {
    return (
        <>
            <Container fluid>
        <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#action1">1994</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                
                    <Nav className="me-auto my-2 my-lg-0" style={{maxHeight:'100px'}} navbarScroll>
                        <Nav.Link href="#action2">Nosotros</Nav.Link>
                        <Nav.Link href="#action3">Música</Nav.Link>
                        <Nav.Link href="#action4">Shows</Nav.Link>
                        <Nav.Link href="#action5">Merch</Nav.Link>
                        <Nav.Link href="#action6">Contacto</Nav.Link>
                    <Button variant="outline-success">Ayudanos!</Button>
                    </Nav>
        </Navbar>
                </Container>
        </>
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