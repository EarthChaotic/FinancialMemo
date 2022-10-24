import React from "react";
import { Text, View, StyleSheet,TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { deletetrans } from './todosSlice';

export function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const deletetranshandler = (id) => {
    dispatch(deletetrans({id : id}))
  }

  if (!todos.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>เริ่มจดบันทึกได้เลย!</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>รายการธุรกรรม</Text>
      {todos.map((todo) => (
        <Text style={styles.todoText} key={todo.id}>
          {todo.detail} {todo.amount} {todo.category} {todo.Today}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  todoText: {
    margin: 4,
  },
});
