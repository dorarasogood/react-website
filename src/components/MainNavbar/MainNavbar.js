import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useTranslation } from 'react-i18next';

function MainNavbar() {
  const { t } = useTranslation();
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">商城</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" data-testid="testToggle"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">{t('navbar.news')}</Nav.Link>
            <NavDropdown title="商品" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Fruit</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Flower</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing">Posts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export { MainNavbar };