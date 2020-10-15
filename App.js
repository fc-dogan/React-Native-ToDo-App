import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState('fatma');
  const [age, setAge] = useState( '30' );



  return (
    <View style={styles.container}>
      <Text > Enter name:</Text>
      <TextInput 
        style={styles.input}
        placeholder='e.g. John '
        onChangeText={(value)=> setName(value)}/>
      <TextInput>name: {name}, age: {age} </TextInput>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  }
});
