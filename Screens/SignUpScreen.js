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
import LoginScreen from "./LoginScreen";

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  function handleregister() {
    navigation.navigate('LOGIN')
  }

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.container}>
        <Image
          style={styles.Image}
          source={require("../Screens/Pics/MemoIcon.jpg")}
        />
        <Text style={styles.TextHeader}>SIGN UP</Text>
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
          onChangeText={setName}
          value={name}
        />
        <Text style={styles.titleTop}>USER NAME</Text>
        <TextInput
          style={{
            width: 300,
            padding: 10,
            borderRadius: 10,
            backgroundColor: "white",
            marginBottom: 10,
          }}
          onChangeText={setUsername}
          value={username}
        />
        <Text style={styles.titleTop}>PASSWORD</Text>
        <TextInput
          placeholder="    6+ Characters"
          placeholderTextColor="#9AB5CE"
          style={{
            width: 300,
            padding: 10,
            borderRadius: 10,
            backgroundColor: "white",
            marginBottom: 10,
          }}
          onChangeText={setPassword}
          value={password}
        />
        <Text style={styles.titleTop}>EMAIL</Text>
        <TextInput
          style={{
            width: 300,
            padding: 10,
            borderRadius: 10,
            backgroundColor: "white",
            marginBottom: 10,
          }}
          onChangeText={setEmail}
          value={email}
        />
        <Text style={styles.titleTop}>PHONE NUMBER</Text>
        <TextInput
          style={{
            width: 300,
            padding: 10,
            borderRadius: 10,
            backgroundColor: "white",
            marginBottom: 10,
          }}
          onChangeText={setPhone}
          value={phone}
        />
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.ButtonLeft}>
          <Text style={styles.titleButtonLeft} onPress={handleregister}>
            SIGN UP
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ButtonRight}>
          <Text
            style={styles.titleButtonRight}
            onPress={() => navigation.navigate("GUEST")}
          >
            GUEST
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={styles.titleBottom}>Already sign up? </Text>
        <TouchableOpacity>
          <Text
            style={styles.underline}
            onPress={() => navigation.navigate("LOGIN")}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;

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
    paddingTop: 10,
    color: "#6B99C3",
  },
  underline: {
    textDecorationLine: "underline",
    paddingTop: 10,
    color: "#FFF16F",
  },
});
