import NavbarBT from '../components/NavbarBT';
import Footer from '../components/Footer';
import { MSBoard } from '../features/minesweeper/Board/Board';

export default function Minesweeper() {
    return (
      <div className='viewgame'>
        <NavbarBT />
      <div className='wrap'>
        <main className='game'>
          <h2>Minesweeper</h2>
          <MSBoard/>
        </main>
      </div>
        <Footer />
      </div>
      );
}