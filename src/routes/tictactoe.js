import NavbarBT from '../components/NavbarBT';
import Footer from '../components/Footer';
import { Game } from '../components/tictactoe/Game/Game';
//import { Game } from '../features/tictactoe/Game/Game';

export default function TicTacToe() {
    return (
      <div className="viewgame">
        <NavbarBT />
        <div className='wrap'>
        <main className='container-fluid game'>
          <h2>Tic Tac Toe</h2>
                <Game></Game>
            
        </main>
        </div>
      <Footer />
      </div>
      );
}