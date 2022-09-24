import React from 'react';
import './Game.css';
import '../Start/Start.css'
import { Board } from '../Board/Board';
import { EndScreen } from '../End/End';
import { useSelector, useDispatch } from 'react-redux'
import { setPlayer, draw, loss, win, selectHistory, selectAiMax, selectCurrentBoard, makeMove, selectStepnumber, selectTurnAi, goback, selectAiPlayer, selectStarted, selectEnded } from '../TTTSlice';
import { minimax } from '../ai';
import { calculateWinner, terminal } from '../utilities';
import { selectHPlayer } from '../TTTSlice';
import { useEffect } from 'react';
import { render } from '@testing-library/react';


export const Game = () => {
    const dispatch = useDispatch();
    const history = useSelector(selectHistory);
    const actualGame = useSelector(selectCurrentBoard)
    const actualStepnumber = useSelector(selectStepnumber)
    const aiturn = useSelector(selectTurnAi)
    const ai = useSelector(selectAiPlayer)
    const human = useSelector(selectHPlayer)
    let start = useSelector(selectStarted)
    const done = useSelector(selectEnded)
    const isMax = useSelector(selectAiMax)
    let result;

    const endGame = (isWinner) => {
      if (isWinner === 'tie') {
        dispatch(draw())
      }
      else if ( isWinner === 'loss'){
        dispatch(loss())
      }
      else {
        dispatch(win())
      }
  }

    const handleClick = (i, isAiTurn = false)  => {
      const currenthistory = history.slice(0, actualStepnumber+1);
      const current = currenthistory[history.length-1]
      // ignore click if game already won or ended or case occupied already
      if (calculateWinner(actualGame) || actualGame[i]) {
        return;
      }
      else {
        // pb
        dispatch(makeMove(current, i, isAiTurn))
      }

    }

    const makeAiMove = (action)=> {
      this.handleClick(action,true)
    }

    const handleUndo = () => {
      dispatch(goback())
    }


      const selectX = () => {
          dispatch(setPlayer("X"))
          
          
      }

      const selectO = () => {
        dispatch(setPlayer("O"))
        
    }

      

    

    if (start && done) {
      return (<EndScreen winner={result}/>)
    }

    else {
      if (terminal(actualGame)) {
        let winner = calculateWinner(actualGame)
        endGame(winner)
        
        if (winner === ai) {
          result = "loss"
        }
        else if (winner === human) {
          result = "win"
        }
        else {
          result = "tie"
        }
      }

      if (aiturn) {
        let move = minimax(actualGame, isMax);
        makeAiMove(move)
      }

      return (
        <div className='wrap'>
        <div className="game">
        <div id="info">
          <span> {this.state.victories} {this.state.victories <= 1 ? 'win' : 'wins'}  </span>
          <span>{this.state.ties} {this.state.ties <= 1 ? 'draw' : 'draws'}  </span>
          <span>{this.state.losses} {this.state.losses <= 1 ? 'loss' : 'losses'}</span>   
          </div>
          <div className="game-board">
          <Board
            squares={actualGame}
            onClick={(i) => handleClick(i)}
          />
          <button id="undo-button" onClick={handleUndo()} title="undo">↺</button>
          </div>
          
        </div>
        </div>
      );
    }  
  }

  