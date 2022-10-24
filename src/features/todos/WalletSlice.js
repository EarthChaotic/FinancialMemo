import { createSlice } from '@reduxjs/toolkit'


const initialState ={
  Wallet:[]
}

const WalletSlice = createSlice({
  name: 'Wallets',
  initialState : [],
  reducers: {
    addWallet(state, action) {
      state.push(action.payload)
    },
    deletewallet(state,action){
      state.Wallets = state.Wallets.filter((wallet)=>wallet.id !==action.payload.id)
    }
  },
})

export const { addWallet, deletewallet } = WalletSlice.actions

export default WalletSlice.reducer