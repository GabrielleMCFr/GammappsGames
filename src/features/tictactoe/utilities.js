

export const resultAction = (squares, action, player) => {
    let newSquares = [...squares]
    if (!newSquares[action]) {
      newSquares[action] = player
      return newSquares
    }

    return squares   

}

export const playerturn = (squares) => {
  let Ocount = 0;
  let Xcount = 0;
  for (let i = 0; i < squares.length; i++) {
    if (squares[i] === 'X') {
      Xcount += 1
    }
    else if (squares[i] === 'O') {
      Ocount += 1
    }
  }
  if (Xcount > Ocount) {
    return "O"
  }
  return "X"
}

export function terminal(squares) {
    let winner = calculateWinner(squares);
    if (winner === null) {
      return false
    }
    else {
      return true
    }
  }
  

  export function calculateWinner(squares) {
    // check for lines, columns and diagonals
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    let countTie = 0;

    // if any of those above is full of O's or X's, return the winner 
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
      else if (squares[a] == null || squares[b] == null || squares[c == null]) {
        countTie += 1;
      }

    }

    // if no winner, check for tie
    if (countTie === 0) {
      return 'Tie!'
    }

    // else, return null
    return null;
  }