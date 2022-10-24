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
          <TouchableOpacity >
          <View style={{flexDirection:"row",justifyContent:"space-evenly"}}>
          <Text key={todo.category}>{todo.amount}</Text>
          <Text>{todo.category}</Text>
          </View>
          </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin:10,
    backgroundColor: "#FFF",
    padding:10

  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign:"center"
  },
  todoText: {
    margin: 4,
    justifyContent: "space-between",
  },
});
