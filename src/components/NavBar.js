import React from "react";
import Home from "./Home";
import Terminarz from "./Terminarz";
import ONas from "./ONas";
import Oferta from "./Oferta";
import Cennik from "./Cennik";
import Kontakt from "./Kontakt";
import Uslugi from "./Uslugi";
import Online from "./Online";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";

const NavBar = () => {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">ROZMATURZENI</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} to="onas">
              O nas
            </Nav.Link>
            <Nav.Link as={NavLink} to="terminarz">
              Terminarz
            </Nav.Link>
            <Nav.Link as={NavLink} to="oferta">
              Oferta
            </Nav.Link>
            <Nav.Link as={NavLink} to="cennik">
              Cennik
            </Nav.Link>
            <Nav.Link as={NavLink} to="kontakt">
              kontakt
            </Nav.Link>
            <Nav.Link
              href="https://www.facebook.com/Rozmaturzeni-1172005829635509/"
              target="_blank"
            >
              Blog
            </Nav.Link>
            <Nav.Link as={NavLink} to="online">
              Online
            </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Button variant="outline-success">Search</Button>
        </Navbar.Collapse>
      </Navbar>
      <div className="pages">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/onas" component={ONas} />
          <Route path="/terminarz" component={Terminarz} />
          <Route path="/oferta" component={Oferta} />
          <Route path="/cennik" component={Cennik} />
          <Route path="/kontakt" component={Kontakt} />
          <Route path="/online" component={Online} />
          <Route path="/uslugi" component={Uslugi} />
        </Switch>
      </div>
    </Router>
  );
};

export default NavBar;
