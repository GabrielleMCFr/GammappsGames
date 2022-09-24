import React from 'react';
import './App.css';
import NavbarBT from '../components/NavbarBT';
import Footer from '../components/Footer';
import Container from 'react-bootstrap/esm/Container';
import Carousel from 'react-bootstrap/Carousel'

function App() {
  return (
    <div className="App">
      <Container id="carousel">
      <NavbarBT />
      <Carousel variant="light">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={"./intro.jpg"}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Let's play a game</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={"./cards2.jpg"}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Memory game</h5>
          <p>Find out the pairs</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={"./tictac.jpg"}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Tic tac toe</h5>
          <p>
            Play against an AI, can you beat it ?
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={"./minesweeper.jpg"}
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <h5>Minesweeper</h5>
          <p>
            Find out all the mines !
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </Container>
      <Footer />
      </div>
  );
}

export default App;
