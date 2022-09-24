
import { selectAiMax } from "./TTTSlice";
import { terminal, calculateWinner, resultAction, playerturn } from "./utilities";

export function minimax(squares, isMax) {
  if (terminal(squares)) {
    return null
  }
  
  let bestMove = null
  let listOfActions = returnActions(squares);
  let movesArray = []
  let currentAction;
  let currentPlayer

  if (isMax) {
    currentPlayer = playerturn(squares)
    for (let i = 0; i<listOfActions.length; i++) {
      currentAction = {utility: minAlphaBeta(resultAction(squares, listOfActions[i], currentPlayer), -Infinity, Infinity), action: listOfActions[i]}
      movesArray.push(currentAction)
    }
    
    movesArray.sort((a, b) => {
      return a.utility - b.utility
    })

    bestMove = movesArray[movesArray.length-1]
    return bestMove
    
  }
  else {
    currentPlayer = playerturn(squares)
    for (let i = 0; i<listOfActions.length; i++) {
      currentAction = {utility: maxAlphaBeta(resultAction(squares, listOfActions[i], currentPlayer), -Infinity, Infinity), action: listOfActions[i]}
      movesArray.push(currentAction)
    }


    movesArray.sort((a, b) => {
      return b.utility - a.utility
    })
    bestMove = movesArray[movesArray.length-1]
    return bestMove
  }
}


export function minAlphaBeta(squares, alpha, beta) {
    let value = Infinity;
    if (terminal(squares)) {
      let util = utility(squares)
      return util
    }
    let listOfActions = returnActions(squares);
    let currentPlayer = playerturn(squares)
    for (let i = 0; i<listOfActions.length; i++) {
      value = Math.min(value, maxAlphaBeta(resultAction(squares, listOfActions[i], currentPlayer), alpha, beta)) 
      beta = Math.min(beta, value)
      if (beta <= alpha) {
        return value
      }
    }
    return value
  }

  export function maxAlphaBeta(squares, alpha, beta) {
    let value = -Infinity;
    let util;
    if (terminal(squares)) {
      util = utility(squares)
      return util
    }
    let listOfActions = returnActions(squares);
    let currentPlayer = playerturn(squares)
    for (let i = 0; i<listOfActions.length; i++) {
      value = Math.max(value, minAlphaBeta(resultAction(squares, listOfActions[i], currentPlayer), alpha, beta)) 
      alpha = Math.max(alpha, value)
      if (beta <= alpha) {
        return value
      }
    }
    return value
  }

  function utility(squares) {
    let potentialWinner = calculateWinner(squares)

    if (potentialWinner === "X") {
      return 1
    }
    else if (potentialWinner === 'O') {
      return (-1)
    }
    else {
      return 0
    }
  }

  export function returnActions(squares) {
    let actions = []
    for (let i=0; i<9; i++) {
      if (squares[i] === null) {
        actions.push(i)
      }
    }
    return actions
  }

  export function player(squares) {
    let countX = 0
    let countO = 0
    const emptyBoard = Array(9).fill(null)

    if (squares === emptyBoard) {
      return 'X'
    } 
    else {
      for (let i=0; i<9; i++) {
        if (squares[i] === 'X') {
          countX += 1
        }
        else if (squares[i] === 'O') {
          countO += 1
        }
      }
      if (countX > countO) {
        return 'O'
      }
      else {
        return 'X'
      }
    }
  }

  export function randomMove(squares) {
    if (calculateWinner(squares)) {
      return null
    }
    else {
      let moves = []
      let actions = returnActions(squares)

      for (let i = 0; i < actions.length; i++) {
        moves.push(actions[i])
      }

      let random = Math.floor(Math.random()*moves.length)
      return moves[random]
    }
  }

  