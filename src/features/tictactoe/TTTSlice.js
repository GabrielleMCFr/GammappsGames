const initialState = {
    history: [{
      squares: Array(9).fill(null)
    }],
    currentBoard: new Array(9).fill(null),
    xIsNext: true,
    stepNumber: 0,
    isStarted: false,
    isOver: false,
    player: 'X',
    aiPlayer: 'O',
    isAiTurn: false,
    aiIsMax: false,
    victories: 0,
    ties: 0,
    losses: 0
  }


  export const tttReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ttt/setPlayer':
          let setState = {...state};
          const player = action.payload;
          if (player === "X") {
            setState = {
                ...state, 
                player: "X",
                aiplayer: 'O',
                aiTurn: false,
                aiMax: false,
                isStarted: true
            }
          }
          else {
            setState = {
                ...state, 
                player: "O",
                aiplayer: 'X',
                aiTurn: true,
                aiMax: true,
                isStarted: true
            }
          }
          return setState;
        case 'ttt/addWin':
            setState = {...state}
            setState.victories += 1
            setState.isOver = true
            return setState
        case 'ttt/addDraw':
            setState = {...state}
            setState.ties += 1
            setState.isOver = true
            return setState
        case 'ttt/addLoss':
            setState = {...state}
            setState.losses += 1
            setState.isOver = true
            return setState
        case 'ttt/setNewGrid': {
            return {...state,
                history: [{
                    squares: Array(9).fill(null)
                  }],
                currentBoard: new Array(9).fill(null),
                xIsNext: true,
                stepNumber: 0,
                isStarted: false,
                isOver: false,
                player: 'X',
                aiPlayer: 'O',
                isAiTurn: false,
                aiIsMax: false,
            };
        }
        case 'ttt/undo':
            let myState = {...state};
            if (myState.stepNumber >= 2) {
                // go back two steps and erase history
              myState = {
                ...state,
                stepNumber: state.stepNumber-2,
              }
              }
              return myState
        case "ttt/move":
            if (!state.isOver) {
                let newState = {...state}
                if (action.ai) {
                    newState.currentBoard[action.move] = state.aiPlayer
                    newState.history = action.history.concat([{squares: newState.currentBoard}])
                    newState.xIsNext = !state.xIsNext
                    newState.stepNumber = newState.history.length
                    newState.isAiTurn = false
                }
                else {
                    newState.currentBoard[action.move] = state.player
                    newState.history = action.history.concat([{squares: newState.currentBoard}])
                    newState.xIsNext = !state.xIsNext
                    newState.stepNumber = newState.history.length
                    newState.isAiTurn = true
                }
                return newState
            }
        break;
        default:
            return state
        }
    }


// actions creator 
export const setNewGame = () => {
    return {
            type: 'ttt/setNewGrid'
          }
}

export const setPlayer = (player) => {
    return {
        type: 'ttt/setPlayer',
        payload: player
    }
}

//pb
export const makeMove= (history, move, ai) => {
    return {
        type: 'ttt/move',
        history: history,
        move: move,
        ai: ai
    }
}


export const goback = () => {
    return {
        type: 'ttt/undo'
    }
}

export const win = () => {
    return {
        type: 'ttt/addWin'
    }
}

export const draw = () => {
    return {
        type: 'ttt/addDraw'
    }
}

export const loss = () => {
    return {
        type: 'ttt/addLoss'
    }
}


// selectors 

export const selectCurrentBoard = state => {
    return state.currentBoard
  }

export const selectStarted = state => {
    return state.isStarted
  }

export const selectEnded = state => {
    return state.isOver
}

export const selectTurnAi = state => {
    return state.isAiTurn
  }

export const selectAiMax = state => {
    return state.aiIsMax
  }

export const selectXNext = state => {
    return state.xIsNext
  }

export const selectHPlayer  = state => {
    return state.player
  }

  export const selectAiPlayer = state => {
    return state.aiPlayer
  }

// pas sur.
export const selectHistory = state => {
    return state.history
  }

export const selectStepnumber = state => {
    return state.stepNumber
}