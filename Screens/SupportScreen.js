import React from "react";
import { Text, View, TouchableOpacity, Image, TextInput } from "react-native";
import { HeaderButtons } from "react-navigation-header-buttons";
import Styles from "./Styles";
const ItemSeparatorView = () => {
  return (
    // Flat List Item Separator
    <View
      style={{
        height: 0.5,
        width: "100%",
        backgroundColor: "#C8C8C8",
      }}
    />
  );
};

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
    <View>
      <View style={Styles.Homecontainer}>
        <View style={Styles.dataContent}>
          <TextInput style={Styles.SupportSubject} placeholder="Subject" />
          <ItemSeparatorView />
          <TextInput
            style={Styles.SupportTextInp}
            placeholder="Input Text Here"
          />
        </View>
      </View>
      <View>
        <View style={Styles.SendPlace}>
            <TouchableOpacity style={Styles.SendTouch} onPress={() => navigation.navigate("HOME")}>
                <Text style={Styles.SendText}>Send</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.CancelTouch} onPress={() => navigation.navigate("HOME")}>
                <Text style={Styles.CancelText}>Cancel</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SupportScreen;
