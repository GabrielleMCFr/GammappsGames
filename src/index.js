import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TicTacToe from './routes/tictactoe';
import Minesweeper from './routes/minesweeper';
import Flashcards from './routes/cards';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/tictactoe" element={<TicTacToe />} />
      <Route path="/flashcards" element={<Flashcards />} />
      <Route path="/minesweeper" element={<Minesweeper />} />
      
      </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
