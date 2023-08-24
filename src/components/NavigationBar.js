import { Navbar, Container, Nav, NavbarBrand } from "react-bootstrap"

const NavigationBar = () => {
    return (
        <div>
            <Navbar variant="dark">
                <Container>
                    <Navbar.Brand href="/">KOMIKRASYID</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#korea">KOREA</Nav.Link>
                        <Nav.Link href="#japan">JAPAN</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar