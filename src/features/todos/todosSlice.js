import { createSlice } from '@reduxjs/toolkit'

let nextTodoId = 0;

const initialState ={
  TransHistory: [],
}

const todosSlice = createSlice({
  name: 'todos',
  initialState : [],
  reducers: {
    addTodo(state, action) {
      state.push(action.payload)
    },
    deletetrans(state,action){
      state.TransHistory = state.TransHistory.filter((detail)=>detail.id !==action.payload.id)
    }
    // toggleTodo(state, action) {
    //   const todo = state.find(todo => todo.id === action.payload)
    //   if (todo) {
    //     todo.completed = !todo.completed
    //   }
    // }
  },
})

export const { addTodo, deletetrans } = todosSlice.actions

export default todosSlice.reducer