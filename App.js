import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('fatma');
  const [age, setAge] = useState( '30' );

  const clickHandler = () => {
    setName('ceyda');
  }

  return (
    <View style={styles.container}>
      <Text>name: {name}, age: {age} </Text>
      <View style={styles.buttonContainer}>
        <Button title='update name' onPress={clickHandler} />
      </View>
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
  buttonContainer: {
    marginTop: 20,
  }
});
