import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/Header';
import ToDoItem from './components/ToDoItem';
import AddTodo from './components/AddTodo';
// import Sandbox from './components/Sandbox';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' }
  ]);
    
    const pressHandler = (key) => {
      setTodos( (prevTodos) => {
        return prevTodos.filter(todo => todo.key !== key)
      })
    }

    const submitHandler = (text) => {
      if(text.length > 3){

        setTodos((prevTodos) => {
          return [
            { text: text, key: (prevTodos.length + 1).toString() },
            ...prevTodos
          ]
        })
      } else {
        Alert.alert('OOPS!', 'Todo must be over 3 chars long', [
          {text: 'Understood', onPress: () => console.log('alert closed')}
        ])
      }
    }

  return (
    // <Sandbox />
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('dismissed');
    }}>

      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList 
              data={todos}
              renderItem={( { item } ) => (
                <ToDoItem item={item} onPress={pressHandler}/>
              )}
            />

          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex:1,
  },
  list: {
    flex:1,
    marginTop: 20,
  }

});
