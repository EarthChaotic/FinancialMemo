import { createSlice } from '@reduxjs/toolkit'

let nextTodoId = 0;

const initialState ={
  balance :0,
  expense:0,
  income:0,
  TransHistory: [],
}

const HistorySlice = createSlice({
  name: 'Histories',
  initialState : [],
  reducers: {
    addTodo(state, action) {
      state.push(action.payload)
    },
    deletetrans(state,action){
      state.TransHistory = state.TransHistory.filter((detail)=>detail.id !==action.payload.id)
    },
  },
})

export const { addTodo, deletetrans } = HistorySlice.actions

export default HistorySlice.reducer