import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useTranslation } from 'react-i18next';
import './MainNavbar.css';

function MainNavbar(props) {
  const { t } = useTranslation();
  return (
    <Navbar collapseOnSelect expand="lg" 
            bg={props.darkMode ? "dark" : "light"} 
            variant={props.darkMode ? "dark" : "light"} >
      <Container>
        <Navbar.Brand href="#">{t('MainNavbar.home')}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" data-testid="navToggle"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#news">{t('MainNavbar.news')}</Nav.Link>
            <NavDropdown title={t('MainNavbar.products')} id="collasible-nav-dropdown">
              <NavDropdown.Item href="#products/fruit" id="navItem">{t('MainNavbar.productsType.fruit')}</NavDropdown.Item>
              <NavDropdown.Item href="#products/flower" id="navItem">{t('MainNavbar.productsType.flower')}</NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link href="#posts">Posts</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export { MainNavbar };