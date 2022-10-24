import React,{useState} from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Styles from "../../../Screens/Styles";
import { deletetrans } from "./HistorySlice";

export function TodoList() {
  const dispatch = useDispatch();
  const Histories = useSelector((state) => state.Histories);
  const deletetranshandler = (id) => {
    dispatch(deletetrans({ id: id }));
  };

  if (!Histories.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>เริ่มจดบันทึกได้เลย!</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>รายการธุรกรรม</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text>รายละเอียด</Text>
        <Text>จำนวนเงิน</Text>
        <Text>เกี่ยวกับ</Text>
      </View>

      {Histories.map((todo) => (
        <TouchableOpacity>
        <View style={styles.item}>
          <View style={styles.itemLeft}>
            <View style={styles.square}></View>
            <Text style={styles.itemText}>
              {todo.detail} {todo.amount} {todo.category} {todo.Today}
            </Text>
          </View>
          <View style={styles.circular}></View>
        </View>
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
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: "80%",
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: "#55BCF6",
    borderWidth: 2,
    borderRadius: 5,
  },
});
