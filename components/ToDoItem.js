import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 


import React from 'react'

function ToDoItem(props) {
  const { item, onPress } = props;
  console.log(item.text + " key: " + item.key)
  return (
    <TouchableOpacity onPress={() => onPress(item.key)}>
      <View style={styles.item}>
        <MaterialIcons name="delete" size={18} color="#333" />
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 26,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    flexDirection: 'row'
  },
  itemText:{
    marginLeft: 10,
  }
})

export default ToDoItem
