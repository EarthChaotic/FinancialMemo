import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

export function TodoList() {
  const todos = useSelector((state) => state.todos);

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
      {todos.map((todo, index) => (
        <Text style={styles.todoText} key={todo.id}>{`${index + 1}. ${
          todo.detail}`}</Text>
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
