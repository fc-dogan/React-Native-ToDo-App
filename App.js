import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import Header from './components/Header';
import ToDoItem from './components/ToDoItem';

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

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/* form */}
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  }

});
