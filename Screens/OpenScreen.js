import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

const OpenScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.container}>
        <Image
          style={styles.Image}
          source={require("../Screens/Pics/MemoIcon.jpg")}
        />
        <Text style={styles.TextHeader}>LOGIN</Text>
      </View>
      <View>
        <Text style={styles.title}>Welcome to Finacial Memo</Text>
        <TouchableOpacity
          style={styles.Buttontop}
          onPress={() => navigation.navigate("LOGIN")}
        >
          <Text style={styles.titleButtontop}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Buttonrow}
          onPress={() => navigation.navigate("SIGNUP")}
        >
          <Text style={styles.titleButton}>SIGN UP</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Buttonrow}
          onPress={() => navigation.navigate("GUEST")}
        >
          <Text style={styles.titleButton}>GUEST LOGIN</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OpenScreen;

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#16354D",
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    backgroundColor: "#16354D",
    alignItems: "center",
    flexDirection: "row",
  },
  Image: {
    width: 50,
    height: 50,
    resizeMode: "center",
  },
  TextHeader: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
  },
  title: {
    color: "#E2D96B",
    marginBottom:10
  },
  Buttontop: {
    marginBottom: 10,
    padding: 12,
    borderRadius: 10,
    backgroundColor: "#FFF",
  },
  Buttonrow: {
    marginBottom: 10,
    padding: 12,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#FFF",
    backgroundColor: "#16354D",
  },
  titleButton: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
  },
  titleButtontop: {
    color: "#16354D",
    textAlign: "center",
    fontWeight: "bold",
  },
});
