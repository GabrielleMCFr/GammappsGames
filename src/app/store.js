import { configureStore } from '@reduxjs/toolkit';
import { boardReducer } from '../features/memorycards/board/boardSlice';

export const store = configureStore({
  reducer: {
    board: boardReducer,
  },
});
