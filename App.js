import { StatusBar } from 'expo-status-bar';
import { Linking } from 'react-native'
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* 2- change text (attributes)*/}
      <Image
        style={styles.portrait}
        source={{
          uri: 'https://lh3.googleusercontent.com/PTXKvo0fb6pjZiGfkq8MFvYaViJzC2p_4MVYVtsy365Lue1lrQt6u680qI4AdvkvyhOxRmceLkkWZOSZsiFO9SdV0wYax_JmXhXtT14orHqQcwM96OfXjZg-c2b6QX5ZUgunrUtQi7kTl0am8TOoaryyqizLVPuY7XJOghcd2HXxTAtx091pT6yYkF8jI1jErNSTMmwNkXAziAIz1osCu5URqMAPbozlaQ04iybnYTEIuDvSfcEwRTO9UactOQNW_-diztacqlLuvLMYo1ydzsq5jM9jSsKfpCU1FLoJaFvUBd-SQ_fxIyHMkJA9q5MTlabgUOOhn70yGeF74m57UO4QJj6YVcFDyWJozy2rIR1NXviMqvGAxucIiPXAwOucE1S9t088Ag1XP6jSqrzKRKkSg5_v8Bzs9nKLp09rAk7s25yDzLGYBaiujtooY6slmKV_VloW-r7inPaiPxPK4ikt8O8oL9Nv2PlTwY4QkcxpG4h37F8pNajk2COJCBEyYTD4t5h1jxuBgjLvFHv0tV-F7Yfvz1ikg0ka_ZLXBK2XmajFfbQ81DY1eSYj4QGhg_mdMSuadSofi_6WXjwCXxBZkc-C2j4wGnZ6Mq4Uh6mm0k3MFBqG-uzxoH9z8cKYyOdiKr5g9YGjYoTXIYw892jfW-z-T0zfcqIrnG4lwbwXD5sAixUa0o71n-orrXcV-prPIxU5LW2dhT8h4f-evDQ=s514-no?authuser=0'
        }}
      />
      <Text style={styles.title}>Elsa Bosemark</Text>
      <Text style={styles.email}>myemail@gmail.com</Text>
      <TouchableOpacity
        onPress={() => { Linking.openURL('http://elsabosemark.weebly.com/'); }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Check out my website</Text>
      </TouchableOpacity>
      <ScrollView style={styles.prompt}>
        <Text style={styles.promptTitle}>Why did you want to learn mobile app development</Text>
        <Text style={styles.promptText}>I regularly use mobile apps and wanted to learn how they were created. I was introduced to mobile app development when I join a Girls In Tech Club at my school. I am a self taught student and primary code using React Native. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id risus odio. Pellentesque dignissim arcu justo, in fermentum felis faucibus eget. Etiam aliquam dapibus justo, nec ornare elit fringilla vitae. Vivamus tempor non ipsum quis porta. Suspendisse in massa a nisi vulputate ornare. Curabitur sed mi vel dolor congue tincidunt quis in ipsum. Nunc ultrices augue aliquam, lacinia urna vitae, pretium urna. Morbi aliquet orci at lacus pharetra congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed mattis diam. Donec eu ipsum imperdiet, interdum purus molestie, dignissim ex. Vestibulum aliquet, mauris eget ultrices scelerisque, nisi nisi venenatis purus, ut ullamcorper libero nisl sit amet mi.</Text>
      </ScrollView>
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
    justifyContent: 'flex-start',
    paddingTop: 100,
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
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    margin: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 20
  },
  email: {
    fontSize: 18,
  },
  prompt: {
    backgroundColor: '#fff',
    marginLeft: 50,
    marginRight: 50,
    marginTop: 10,
    margin: 50,
    padding: 20,
  },
  promptText: {
    fontSize:18,
    lineHeight:30,
  },
  promptTitle: {
    paddingBottom: 10,
    fontSize: 20,
    lineHeight:30,
    fontWeight:"bold",
  }

});
