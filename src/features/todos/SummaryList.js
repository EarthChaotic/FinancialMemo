import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Styles from "../../../Screens/Styles";

export function SummaryList() {
  const Histories = useSelector((state) => state.Histories);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>สรุปยอดธุรกรรม</Text>
      {Histories.map((todo) => (
          <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between" ,}}>
          <Text key={todo.category}/>
          <Text>{todo.amount}</Text>
          <Text>{todo.category}</Text>
          </TouchableOpacity>
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
    justifyContent: "space-between",
  },
});
