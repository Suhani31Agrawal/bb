import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity } from 'react-native';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import welcomeScreen from "./screens/welcomeScreen"

export default function App() {
  return (
    <AppContainer/>
  );
}

const switchNavigator=createSwitchNavigator({
  welcomeScreen:{screen:welcomeScreen},
  BottomTabNavigator:{screen:BottomTabNavigator}
})
const AppContainer=createAppContainer(switchNavigator)