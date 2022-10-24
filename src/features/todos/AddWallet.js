import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";
import Styles from "../../../Screens/Styles";
import { addWallet } from "./WalletSlice";
import { nanoid } from "nanoid";
import RNPickerSelect from "react-native-picker-select";

export const AddWallet = () => {
  const dispatch = useDispatch();
  const [walletn, setwalletn] = useState();
  const [amount, setamount] = useState();
  const [Type, setType] = useState("เงินสด");

  function handleSumbit() {
    if (isNaN(amount)) {
      alert("โปรดใส่จำนวนเงินให้ถูกต้อง");
    } else if (walletn === "") {
      alert("โปรดใส่ชื่อบัญชี");
    } else if (setType === "") {
      alert("โปรดเลือกประเภทบัญชี");
    } else {
      dispatch(
        addWallet({
          walletn,
          amount,
          Type,
          id: nanoid(),
        })
      );
      setwalletn("");
      setamount("");
    }
  }

  return (
    <View style={styles.container}>
      <Text>ชื่อกระเป๋าเงิน</Text>
      <TextInput
        placeholder="กระเป๋าตัง"
        value={walletn}
        onChangeText={setwalletn}
        style={Styles.SupportTextInp}
      />
      <Text>จำนวนเงิน</Text>
      <TextInput
        placeholder="จำนวนเงิน"
        value={amount}
        onChangeText={setamount}
        style={Styles.SupportTextInp}
      />
      <Text>ประเภท :</Text>
      <RNPickerSelect
        onValueChange={setType}
        items={[
          { label: "เงินสด", value: "เงินสด" },
          { label: "ธนาคาร", value: "ธนาคาร" },
        ]}
      />
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
