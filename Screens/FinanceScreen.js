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
import { TodoList } from "../src/features/todos/TodoList";
import { AddTodo } from "../src/features/todos/AddTodo";

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
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* add transaction modal */}
      <Modal animationType={"slide"} transparent={false} visible={showModal}>
        <View style={Styles.AddTransContainer}>
          <AddTodo />
        
            <TouchableOpacity
              style={Styles.CancelTouch}
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

        </View>
      </Modal>
      {/* add transaction modal */}
      <View>
        <TodoList />
      </View>
    </SafeAreaView>
  );
};

export default FinanceScreen;
