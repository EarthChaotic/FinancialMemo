import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";

const GuestScreen = ({ navigation }) => {
  const [guestname, setGuestname] = useState();

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.container}>
        <Image
          style={styles.Image}
          source={require("../Screens/Pics/MemoIcon.jpg")}
        />
        <Text style={styles.TextHeader}>GUEST</Text>
      </View>
      <View>
        <Text style={styles.title}>Welcome to Finacial Memo</Text>
      </View>
      <View>
        <Text style={styles.titleTop}>NAME</Text>
        <TextInput
          style={{
            width: 300,
            padding: 10,
            borderRadius: 10,
            backgroundColor: "white",
            marginBottom: 10,
          }}
          onChangeText={setGuestname}
          value={guestname}
        />
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.ButtonLeft}>
          <Text style={styles.titleButtonLeft}>ENTER</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ButtonRight}>
          <Text
            style={styles.titleButtonRight}
            onPress={() => navigation.navigate("Login")}
          >
            LOGIN
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={styles.titleBottom}>Don't have account? </Text>
        <TouchableOpacity>
          <Text
            style={styles.underline}
            onPress={() => navigation.navigate("Signup")}
          >
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default GuestScreen;

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
    marginTop: 10,
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
    marginBottom: 10,
  },
  titleTop: {
    color: "#FFF",
    fontWeight: "bold",
  },
  ButtonLeft: {
    width: 100,
    height: 40,
    marginRigth: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#FFF16F",
  },
  titleButtonLeft: {
    color: "#16354D",
    textAlign: "center",
    fontWeight: "bold",
  },
  ButtonRight: {
    width: 100,
    height: 40,
    marginLeft: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#16354D",
    borderWidth: 2,
    borderColor: "#FFF16F",
  },
  titleButtonRight: {
    color: "#FFF16F",
    textAlign: "center",
    fontWeight: "bold",
  },
  titleBottom: {
    color: "#6B99C3",
  },
  underline: {
    textDecorationLine: "underline",
    color: "#FFF16F",
  },
});
