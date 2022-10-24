import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { addTodo } from "./todosSlice";
import { nanoid } from "nanoid";
import RNPickerSelect from "react-native-picker-select";
import moment from "moment";

export const AddTodo = () => {
  const [detail, setdetail] = useState();
  const [amount, setamount] = useState(Number);
  const dispatch = useDispatch();
  const [wallet, setwallet] = useState();
  const [transtype, settranstype] = useState();
  const [category, setcategory] = useState("other");
  let Today = moment().format('YYYY-MM-DD HH:mm')


  function handleSumbit() {
    if (isNaN(amount)) {
      alert("Input Right Amount");
    } else {
      dispatch(
        addTodo({
          detail,
          amount,
          category,
          Today,
          id: nanoid(),
        })
      );
      setamount("");
      setdetail("");
    }
  }

  return (
    <View style={styles.container}>
      <Text>กระเป๋าเงิน</Text>
      <RNPickerSelect
        onValueChange={setwallet}
        items={[
          { label: "กระเป๋าตัง", value: "wallet" },
          { label: "ธนาคาร", value: "bank" },
        ]}
      />
      <Text>วัน เดือน ปี</Text>
      {Today}
      <Text>จำนวนเงิน</Text>
      <TextInput
        placeholder="amount"
        value={amount}
        onChangeText={setamount}
        style={styles.input}
      />
      <Text>ประเภทการใช้จ่าย</Text>
      <RNPickerSelect
        onValueChange={settranstype}
        items={[
          { label: "Expense", value: "expense" },
          { label: "Income", value: "income" },
        ]}
      />
      <Text>เกี่ยวกับ</Text>
      <RNPickerSelect
        onValueChange={setcategory}
        items={[
          { label: "อาหาร", value: "food" },
          { label: "รายเดือน", value: "subscribe" },
          { label: "ช๊อปปิ้ง", value: "shopping" },
          { label: "ค่าน้ำ", value: "waterbill" },
          { label: "ค่าไฟ", value: "electricbill" },
          { label: "อื่นๆ", value: "other" },
        ]}
      />
      <Text>รายละเอียด</Text>
      <TextInput
        placeholder="detail"
        value={detail}
        onChangeText={setdetail}
        style={styles.input}
      />
      <Button title="Add" onPress={handleSumbit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 2,
  },
  input: {
    backgroundColor: "ghostwhite",
    marginBottom: 8,
    padding: 8,
    height: 40,
  },
});
