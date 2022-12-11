import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity } from 'react-native';
import Draggable from 'react-native-draggable';
import CoordinateBar from './components/CoordinateBar';
import ToolBoxItem from './components/ToolBoxItem';
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import react ,{ useRef, useState } from 'react';
import MainActivity from './components/MainActivity';
import newScreen from './components/newScreen';




const stackNavigator=createStackNavigator({
  
  Scratch:MainActivity,
  Action:newScreen,
  
})
const app=createAppContainer(stackNavigator)
export default app


