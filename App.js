import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, Button, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import AddChatScreen from "./AddChatScreen";
import ChatScreen from "./screens/ChatScreen";
import RegisterScreen from "./screens/RegisterScreen";

const Stack = createStackNavigator();

const globalScreenOptions = {
  headerStyle: {
    backgroundColor: "#2c6BED",
  },
  headerTitleStyle: { color: "white" },
  headerTintColor: "white",
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddChat" component={AddChatScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;