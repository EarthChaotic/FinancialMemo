import { createSlice } from '@reduxjs/toolkit'

let nextTodoId = 0;

const todosSlice = createSlice({
  name: 'todos',
  initialState : [],
  reducers: {
    addTodo(state, action) {
      state.push({ id: nextTodoId++, detail: action.payload, completed: false })
    },
    toggleTodo(state, action) {
      const todo = state.find(todo => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    }
  },
})

export const { addTodo, toggleTodo,addamount,toggleamount } = todosSlice.actions

export default todosSlice.reducer