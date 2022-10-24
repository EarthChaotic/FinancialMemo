import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    TouchableOpacity,
    TextInput,
  } from "react-native";
  import { NavigationContainer } from "@react-navigation/native";
  import { createNativeStackNavigator } from "@react-navigation/native-stack";
  import OpenScreen from "./Screens/OpenScreen";
  import SignUpScreen from "./Screens/SignUpScreen";
  import LoginScreen from "./Screens/LoginScreen";
  import GuestScreen from "./Screens/GuestSrceen";
  
  import React from "react";
  
  const Stack = createNativeStackNavigator();
  
  export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Open"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Open" component={OpenScreen} />
          <Stack.Screen name="Signup" component={SignUpScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Guest" component={GuestScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  