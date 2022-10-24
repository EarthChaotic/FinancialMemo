import { StyleSheet, SafeAreaView, Image } from "react-native";
import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OpenScreen from "./Screens/OpenScreen";
import SignUpScreen from "./Screens/SignUpScreen";
import LoginScreen from "./Screens/LoginScreen";
import GuestScreen from "./Screens/GuestSrceen";
import HomeScreen from "./Screens/HomeScreen";
import FinanceScreen from "./Screens/FinanceScreen";
import WalletScreen from "./Screens/WalletScreen";
import SummaryScreen from "./Screens/SummaryScreen";
import SupportScreen from "./Screens/SupportScreen";
import { Provider } from 'react-redux';
import { store } from './src/store';


const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#16354D",
  },
};


//Drawer Content
function CustomDrawerContent(props) {
  return (
    <SafeAreaView>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        {/* <DrawerItem
          label="Sign out"
          onPress={() => props.navigation("LOGIN")}/> */}
      </DrawerContentScrollView>
    </SafeAreaView>
  );
}
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function MyStack() {
  return (
      <Stack.Navigator
        initialRouteName="Open"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="OPEN" component={OpenScreen} />
        <Stack.Screen name="SIGNUP" component={SignUpScreen} />
        <Stack.Screen name="LOGIN" component={LoginScreen} />
        <Stack.Screen name="GUEST" component={GuestScreen} />
        <Stack.Screen name="HOME" component={MyDrawer}/>
      </Stack.Navigator>
  );
}

//ใส่เพื่อเพิ่มแถบข้างใน Drawer
function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          width: 225,
        },
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontWeight: "500",
        },
        headerStyle: {
          backgroundColor: "#16354D",
        },
        headerTintColor: "#fff",
      }}
    >
      <Drawer.Screen name="HOME" component={HomeScreen} />
      <Drawer.Screen name="FINANCIAL" component={FinanceScreen} />
      <Drawer.Screen name="WALLET" component={WalletScreen} />
      <Drawer.Screen name="SUMMARY" component={SummaryScreen} />
      <Drawer.Screen name="SUPPORT" component={SupportScreen} />
    </Drawer.Navigator>
  );
}
const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Provider store={store}>
      <MyStack />
      </Provider>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: "center",
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: "center",
  },
});
