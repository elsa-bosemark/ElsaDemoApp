import { StatusBar } from 'expo-status-bar';
import { Linking} from 'react-native'
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* 2- change text (attributes)*/}
      <Image
        style={styles.portrait}
        source={{
          uri: 'https://lh3.googleusercontent.com/F_qPMyGWAGIfGFUYcn1Fh_O-Z12yzAOqvrzx99FM7hxL3J0b7EHXExJmUwiOGWHUJmHeTA_exznv8bJ3bkisKCHWY8-7vZcV9vxYR04jYFka8-9GZZa51VnOJljlgCpRRDf0Om5lnAb8pXsNe7E5s7EVn6qhxn3Sfan9kiMNwuGKnxef12ITZWmdscMdzqBZtR-aTP5ZYr44UP9uEDgsTtEOPeyNuu-XLI73SCc5KLJ2iTOziiJJjdhgV9eGPiczi01KYuOYbvNXMlc-8LX83c7qKnlLTaF6aqIsiIbktBRPYRGSoBsXnc4Bri5GxRVxPnBmu7BbewzNZCSu3QZ7InDK2zw_gnerZFiVd7pfzr9YP9plBBcvW-CkvDwIi4pjtvT3VkUIu7XSBRP5IOZiuWJh6vkL3wbMWrCd-3bFNLGIx6XzzL3oki471zvHb34M6GQOBb4DzjMFnqhu_jOUKDqpjPnimKBM6kCq_607EwOWozXtoaMCLxZz94Mndybn6C7IWlu4Hpo7-JQX8xREKIT8BX5udMPqlF3Laz94RNm7mGZgkMKi96h0REXtMPO6n7oYwWB1PzRt5xklMsmzjxpoJ_Kubb7Mk5rk9t2OzZGa1VwziBbU_Gs79TFp4c6XX0OiXbYMdU4Oe_75G4PbeK2-ke5ez0mX6iNEIBVDJYrjykbmzQbYEmu9HlH_0rR0-1r_8UDrbs1MNvH4BwSd2fI=s514-no?authuser=0'
        }}
      />
      <Text style={styles.title}>Elsa Bosemark</Text>
      <Text style={styles.email}>myemail@gmail.com</Text>
      <TouchableOpacity
        onPress={()=>{Linking.openURL('http://elsabosemark.weebly.com/');}}
        style={styles.button}
      >
        <Text  style={styles.buttonText}>Check out my website</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c7e9f9',
    //x-axis
    alignItems: 'center',
    //y-axis
    justifyContent:'flex-start',
    paddingTop:100,
  },
  title: {
    fontSize: 35,
    color: "black",
  },
  portrait: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  button: {
    backgroundColor: "#28667c",
    paddingTop: 10,
    paddingBottom:10,
    paddingLeft:15,
    paddingRight:15,
    margin:10,
  },
  buttonText:{
    color: "white",
    fontSize:20
  },
  email:{
    fontSize:18,
  }

});
