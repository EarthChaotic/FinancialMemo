import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal,
  SafeAreaView,
} from "react-native";
import { HeaderButtons } from "react-navigation-header-buttons";
import Styles from "./Styles";
import { Ionicons } from "@expo/vector-icons";
import { AddWallet } from "../src/features/todos/AddWallet";
import WalletList from "../src/features/todos/WalletList";

const WalletScreen = ({ navigation }) => {
  const IoniconsHeaderButton = (props) => (
    <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
  );

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

  return (
    <SafeAreaView>
      <Modal animationType={"slide"} transparent={false} visible={showModal}>
        <AddWallet/>
        <TouchableOpacity
          style={{    margin: 10,
            backgroundColor: "#8D9DA9",
            padding: 5,
            borderRadius: 5,
            alignItems:'center'}}
          onPress={() => setShowModal(!showModal)}
        >
          <Text
            style={{
              color: "#FFFFFF",
              fontWeight: "bold",
              alignContent: "center",
            }}
          >
            CANCEL
          </Text>
        </TouchableOpacity>
      </Modal>
      <View>
      <WalletList/>
      </View>
    </SafeAreaView>
  );
};

export default WalletScreen;
