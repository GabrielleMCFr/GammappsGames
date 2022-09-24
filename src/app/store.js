import { configureStore } from '@reduxjs/toolkit';
import { boardReducer } from '../features/memorycards/board/boardSlice';
import { tttReducer } from '../features/tictactoe/TTTSlice';

export const store = configureStore({
  reducer: {
    board: boardReducer,
    ttt: tttReducer
  },
});
