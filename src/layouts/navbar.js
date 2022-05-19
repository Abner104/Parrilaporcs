
import { Navbar, Nav, Container } from "react-bootstrap"
import { Outlet , Link } from "react-router-dom"

const NavbarExample = () => {
    return (
        <>
            <Navbar className="navBg"  bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/" ><img src="logoFIN.png" className="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/" >Inicio</Nav.Link>
                            <Nav.Link as={Link} to="/platos">Platos</Nav.Link>
                            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


            <section>
                <Outlet></Outlet>
            </section>

        </>

    )
}

export default NavbarExample