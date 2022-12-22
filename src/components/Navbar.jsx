import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";

function NavbarRegister() {
  return (
    <Navbar className="navbar" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="text-white">
          Rainbow Food Journal
        </Navbar.Brand>
        <Nav className="me-auto"></Nav>
        <NavDropdown title="Food" id="basic-nav-dropdown" className="foodmenu1">
          <NavDropdown.Item href="/forum">Forum Food</NavDropdown.Item>
          <NavDropdown.Item href="/discussion">
            Discussion Food
          </NavDropdown.Item>
        </NavDropdown>
        <NavDropdown
          title="Setting"
          id="basic-nav-dropdown"
          className="foodmenu1"
        >
          <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
          <NavDropdown.Item href="/https://www.google.com/">
            Sign Out
          </NavDropdown.Item>
        </NavDropdown>
      </Container>
    </Navbar>
  );
}
export default NavbarRegister;
