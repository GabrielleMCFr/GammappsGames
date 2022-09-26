import Footer from '../components/Footer';
import NavbarBT from '../components/NavbarBT';
import { Board } from '../features/memorycards/board/Board';
import { Score } from '../features/memorycards/score/Score';
import { useDispatch } from 'react-redux';
import { setBoard, selectBoard } from '../features/memorycards/board/boardSlice';
import '../app/Cards.css'
import Container from 'react-bootstrap/esm/Container';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';


export default function Flashcards() {
    const dispatch = useDispatch();
    const currentBoard = useSelector(selectBoard)

    const startGameHandler = () => {
      dispatch(setBoard())
    }

    if (currentBoard.length === 0) {
      return (
        <div className="viewgame">
          <NavbarBT />
          <div className='wrap'>
          <main className='game'>
            <h2>Memory game - Flashcards</h2>
            <Score />
            <Button variant="primary" onClick={startGameHandler}>Start Game</Button>
            <Board />
            
          </main>
          </div>
          <Footer/>
        </div>
        );
    }

    else {
      return (
        <div className="viewgame">
          <NavbarBT />
          <div className='wrap'>
          <main className='game'>
            <h2>Memory game - Flashcards</h2>
            <Score />
            <Button variant="primary" onClick={startGameHandler}>Reset</Button>
            <Container>
           
          </Container>
          <Container id='cardsboard'>
            <Board />
            </Container>
            
          </main>
          </div>
          <Footer/>
        </div>
        );
    }

    
}