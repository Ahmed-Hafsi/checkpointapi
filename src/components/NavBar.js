import React from 'react'
import { Navbar , Container , Nav } from 'react-bootstrap'


const NavBar = () => {
    return (
        <div>
             <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand >IT</Navbar.Brand>
    <Nav className="me-auto">
    <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/users">Users</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    )
}

export default NavBar