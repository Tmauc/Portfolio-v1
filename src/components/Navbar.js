import React from "react"
import "../styles/Navbar.css"
import { Navbar, Nav } from 'react-bootstrap';

function NavbarComponent() {
  return (
    <div>
      <Navbar fixed="top" expand="lg">
        <Navbar.Brand href="/home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="navbar" id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/instagram">Instagram</Nav.Link>
            <Nav.Link href="/twitch">Twitch</Nav.Link>
            <Nav.Link href="/secret">Secret</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
export default NavbarComponent;