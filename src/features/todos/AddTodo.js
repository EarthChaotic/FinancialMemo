import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { addTodo } from "./HistorySlice";
import { nanoid } from "nanoid";
import RNPickerSelect from "react-native-picker-select";
import moment from "moment";
import Styles from "../../../Screens/Styles";
import { TouchableOpacity } from "react-native-gesture-handler";

export const AddTodo = () => {
  const [detail, setdetail] = useState("");
  const [amount, setamount] = useState(Number);
  const dispatch = useDispatch();
  const [wallet, setwallet] = useState();
  const [transtype, settranstype] = useState();
  const [category, setcategory] = useState("อื่นๆ");
  let Today = moment().format("DD-MM-YY HH.mm a");

  function handleSumbit() {
    if (isNaN(amount)) {
      alert("โปรดใส่จำนวนเงินให้ถูกต้อง");
    } else if (detail === "") {
      alert("โปรดใส่รายละเอียด");
    } else if(amount === ""){
      alert("โปรดใส่จำนวนเงิน")
    }
    else{
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
      <View style={Styles.modalrow}>
        <Text>กระเป๋าเงิน :</Text>
        <RNPickerSelect
          onValueChange={setwallet}
          items={[
            { label: "กระเป๋าตัง", value: "wallet" },
            { label: "ธนาคาร", value: "bank" },
          ]}
        />
      </View>

      <View style={Styles.modalrow}>
        <Text>วัน เดือน ปี :</Text>
        {Today}
      </View>

      <View style={Styles.modalrow}>
        <Text>จำนวนเงิน :</Text>
        <TextInput
          placeholder="amount"
          value={amount}
          onChangeText={setamount}
          style={Styles.SupportTextInp}
        />
      </View>

      <View style={Styles.modalrow}>
        <Text>ประเภทการใช้จ่าย :</Text>
        <RNPickerSelect
          onValueChange={settranstype}
          items={[
            { label: "Expense", value: "expense" },
            { label: "Income", value: "income" },
          ]}
        />
      </View>

      <View style={Styles.modalrow}>
        <Text>เกี่ยวกับ :</Text>
        <RNPickerSelect
          onValueChange={setcategory}
          items={[
            { label: "อาหาร", value: "อาหาร" },
            { label: "รายเดือน", value: "รายเดือน" },
            { label: "ช๊อปปิ้ง", value: "ช๊อปปิ้ง" },
            { label: "ค่าน้ำ", value: "ค่าน้ำ" },
            { label: "ค่าไฟ", value: "ค่าไฟ" },
            { label: "อื่นๆ", value: "อื่นๆ" },
          ]}
        />
      </View>

      <View style={Styles.modalrow}>
        <Text>รายละเอียด :</Text>
        <TextInput
          placeholder="detail"
          value={detail}
          onChangeText={setdetail}
          style={Styles.SupportTextInp}
        />
      </View>
      <TouchableOpacity style={Styles.AddYellow} onPress={handleSumbit}>
        <Text style={{ color: "#FFFFFF", fontWeight: "bold" }}>CONFIRM</Text>
      </TouchableOpacity>
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
