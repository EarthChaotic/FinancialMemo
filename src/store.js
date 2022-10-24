import { configureStore } from '@reduxjs/toolkit'
import HistorySlice from './features/todos/HistorySlice';
export const store = configureStore({
  reducer: {
    Histories: HistorySlice,
  },
})