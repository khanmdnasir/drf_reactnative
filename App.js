import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screan/Home';
import Create from './screan/Create';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();


export default function App() {
  return (
    <View style={styles.container}>
      <Home/>
      
    </View>
  );
}

 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eddfdf',
    marginTop:Constants.statusBarHeight,
    
  },
  textstyle:{
    fontSize:25,
    color:"red"
  }
});
