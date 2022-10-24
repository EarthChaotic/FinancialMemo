import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import {
  HeaderButtons,
} from "react-navigation-header-buttons";
import Styles from "./Styles";
import { TodoList } from "../src/features/todos/TodoList";

const SummaryScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons >
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
    <View>
        <TodoList/>
    </View>
  );
};

export default SummaryScreen;