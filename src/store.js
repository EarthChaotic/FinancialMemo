import { configureStore } from '@reduxjs/toolkit'
import HistorySlice from './features/todos/HistorySlice';
import WalletSlice from './features/todos/WalletSlice';
export const store = configureStore({
  reducer: {
    Histories: HistorySlice,
    Wallets: WalletSlice
  },
})