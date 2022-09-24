import React from 'react';
import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarBT() {
  return (
    <div>
    <Navbar bg="transparent" variant="dark" expand="lg">
      <Container id="navcontainer">
        <Navbar.Brand href="#" className="brand"><Link to="/">Gammapps Games</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav id="main-nav">
            <Link to="/flashcards" className='Navlink'>Flashcards</Link>
            <Link to="/tictactoe" className='Navlink'>Tic Tac Toe</Link>
            <Link to="/minesweeper" className='Navlink'>Minesweeper</Link>
          </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
      <Outlet />
    </div>
  );
}

export default NavbarBT;