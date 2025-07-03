import { Outlet, Link } from "react-router-dom";
import Header from "./Header";
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';


const TopNav  = ( ) => {
    return(
<>
<div className="fixed-top bg-white">
<Header/>
 <Navbar collapseOnSelect expand="lg" className="navBg">
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="custom-toggler"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="" className="text-white fw-bold">후보자상황판</Nav.Link>
            <Nav.Link href="" className="text-white fw-bold">유권자 반응분석</Nav.Link>
            <Nav.Link href="" className="text-white fw-bold">후보자프로파일</Nav.Link>
            <Nav.Link href="" className="text-white fw-bold">프로파일편집</Nav.Link>
            {/*<NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>*/}
          </Nav>
          <Nav>
            {/*<Nav.Link href="#deets">More deets</Nav.Link>*/}
            <Nav.Link eventKey={2} href="" className="btn bg-white px-3 mainColor fw-bold">
            간편로그인
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
<Outlet />
</>
    );
}
export default TopNav;