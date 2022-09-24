import React from "react";
import { useSelector } from "react-redux";
import Square from '../Square/Square'
import { selectCurrentBoard } from "../TTTSlice";
import './Board.css'


export const Board = (props) => {


    const renderSquare = (i) => {
      let currentBoard = useSelector(selectCurrentBoard)
      return (
        <Square
          value={currentBoard[i]}
          onClick={() => props.onClick(i)}
        />
      );
    }
  

    return (
        <div>
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
      );
    }
  