import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

export default function () {
  const applyUrl = "https://zaratan.managebuilding.com/Resident/rental-application/new";
  const loginUrl = "https://zaratan.managebuilding.com/Resident/portal";

  return (
    <Navbar bg="light" expand="lg" style={{ padding: "10px 10px 10px 30px"}}>
    <Container fluid>
      <Navbar.Brand href="/" >Zaratan &#x1F422;</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavDropdown title="Houses" id="basic-nav-dropdown">
            <NavDropdown.Item href="houses/sage">Highland Park &#x2013; Sage &#x1F331;</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href={applyUrl}><b>Apply</b></Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <ul className="navbar-nav navbar-right">
        <li className="nav-item btn btn-sm btn-outline-success">
          <a className="nav-link" href={loginUrl}><b>Login</b></a>
        </li>
      </ul>
    </Container>
    </Navbar>
  )
}