import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { HeaderButtons } from "react-navigation-header-buttons";
import Styles from "./Styles";


const SupportScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
              source={require("../Screens/Pics/MemoHeader.png")}
              style={Styles.headericon}
            />
          </TouchableOpacity>
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  return (
    <View styles={Styles.container}>
      <View style={Styles.supportcontainer}>
        <View style={Styles.SupportDataContent}>
          <Text style={Styles.colormsg}>วัน เดือน ปี               :</Text>
          <TextInput style={Styles.SupportTextInp} placeholder="วันที่" />
        </View>
        <View style={Styles.SupportDataContent}>
          <Text style={Styles.colormsg}>จาก                         :</Text>
          <TextInput style={Styles.SupportTextInp} placeholder="ชื่อ" />
        </View>
        <View style={Styles.SupportDataContent}>
          <Text style={Styles.colormsg}>ถึง                           :</Text>
          <Text>FinancialMemo@gmail.com</Text>
        </View>
        <View style={Styles.SupportDataContent}>
          <Text style={Styles.colormsg}>หัวข้อ (ถ้ามี)             :</Text>
          <TextInput style={Styles.SupportTextInp} placeholder="หัวข้อ" />
        </View>
        <View style={Styles.SupportDataContent}>
          <Text style={Styles.colormsg}>รายละเอียด              :</Text>
          <TextInput style={Styles.SupportTextInp} placeholder="รายละเอียด" />
        </View>
        <View style={Styles.SupportButtonContent}>
        <TouchableOpacity style={Styles.SendTouch}>
          <Text style={{color:"#FFFFFF"}}>CONFIRM</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.CancelTouch}>
          <Text style={{color:"#FFFFFF"}}>CANCEL</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SupportScreen;
