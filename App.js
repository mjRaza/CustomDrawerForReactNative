import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screen/Home";
import Settings from "./screen/Settings";
import CustomDrawerScreen from "./screen/CustomDrawerScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Drawer.Navigator
        // drawerStyle={{
        //   backgroundColor: "#c6cbef",
        //   width: 300,
        // }}
        initialRouteName="DrawerHome"
        drawerContent={(props) => <CustomDrawerScreen {...props} />}
      >
        <Drawer.Screen name="DrawerHome" component={Home} />
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>
    </NavigationContainer>

  );
}
