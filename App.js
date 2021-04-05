import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* 2- change text (attributes)*/}
      <Text style={styles.title}>Elsa Bosemark</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //1- Change background
    backgroundColor: '#c7e9f9',
    //What are these doing
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize:30,
    color:"black",
  }
});
