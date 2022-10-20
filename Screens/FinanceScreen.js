import {
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Modal,
  TextInput,
} from "react-native";
import { HeaderButtons, HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import Styles from "./Styles";
import React, { useState } from "react";

const IoniconsHeaderButton = (props) => (
  <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);

const FinanceScreen = ({ navigation }) => {
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
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <TouchableOpacity onPress={() => setShowModal(!showModal)}>
            <Ionicons name="add-circle" size="40px" color="#FFF" />
          </TouchableOpacity>
        </HeaderButtons>
      ),
    });
  }, [navigation]);
  const [showModal, setShowModal] = useState(false);
  const [detail, setdetail] = useState("");
  const [amount, setamount] = useState("");
  var detaillist = [];
  var amountlist = [];
  const pushlist = () => {
      detaillist.push(detail)
      amountlist.push(amount)
  };
  const Magic =() =>{
    return(
      <Text>{detaillist[0]}</Text>
    )
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* add transaction modal */}
      <Modal animationType={"slide"} transparent={false} visible={showModal}>
        <View style={Styles.AddTransContainer}>
          <View style={Styles.AddTransdataContainer}>
            <Text>รายละเอียด</Text>
            <TextInput
              placeholder="สินค้าที่ซื้อ"
              value={detail}
              onChangeText={(detail) => {
                setdetail(detail);
              }}
            />
          </View>

          <View style={Styles.AddTransdataContainer}>
            <Text>กระเป๋าเงิน</Text>
          </View>

          <View style={Styles.AddTransdataContainer}>
            <Text>วัน เดือน ปี</Text>
          </View>

          <View style={Styles.AddTransdataContainer}>
            <Text>จำนวนเงิน</Text>
            <TextInput
              placeholder="จำนวนเงิน"
              value={amount}
              onChangeText={(amount) => {
                setamount(amount);
              }}
            />
          </View>

          <View style={Styles.AddTransdataContainer}>
            <Text>ประเภท</Text>
          </View>
          <TouchableOpacity onPress={pushlist}>
            ยืนยัน
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setShowModal(!showModal)}>
            {" "}
            ปิด
          </TouchableOpacity>
        </View>
      </Modal>
      {/* add transaction modal */}
      <View>
        <Magic/>
        </View>
    </SafeAreaView>
  );
};

export default FinanceScreen;
