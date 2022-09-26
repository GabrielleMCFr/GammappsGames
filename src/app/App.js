import React from 'react';
import './App.css';
import NavbarBT from '../components/NavbarBT';
import Footer from '../components/Footer';
import Container from 'react-bootstrap/esm/Container';
import Carousel from 'react-bootstrap/Carousel';
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <NavbarBT />
      <Container id="main-bot">
        <Row>
          <Col md={3}>
            <Container id="block">
              <div className='container-title'>Top Games</div>
              <ListGroup id="listgrp">
                <ListGroup.Item className='listItem'><Link to="/flashcards" className='Navlink'>Flashcards</Link><p className='gamedetail'>Memory game, find the pairs</p></ListGroup.Item>
                <ListGroup.Item className='listItem'><Link to="/tictactoe" className='Navlink'>Tic Tac Toe</Link><p className='gamedetail'>can you beat the AI ?</p></ListGroup.Item>
                <ListGroup.Item  className='listItem'><Link to="/minesweeper" className='Navlink'>Minesweeper</Link><p className='gamedetail'>Find all the mines!</p></ListGroup.Item>
              </ListGroup>
            </Container>
          </Col>
          <Col md={9}> <Carousel variant="light" id="btcarousel">
      <Carousel.Item>
        <img
          className="imgcar"
          src={"./cards2.jpeg"}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5><Link to="/flashcards" className='carlink'>Flashcards</Link></h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="imgcar"
          src={"./tictac.jpg"}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5><Link to="/tictactoe" className='carlink'>Tic Tac Toe</Link></h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="imgcar"
          src={"./minesweeper.jpg"}
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <h5><Link to="/minesweeper" className='carlink'>Minesweeper</Link></h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel></Col>
        </Row>
      

      </Container>
      <div className='appFooter'>
      <Footer />
      </div>
      </div>
  );
}

export default App;
