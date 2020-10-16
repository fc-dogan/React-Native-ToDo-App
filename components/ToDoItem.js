import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import React from 'react'

function ToDoItem(props) {
  const { item } = props;
  return (
    <TouchableOpacity >
      <Text style={styles.item}>{item.text}</Text>
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
    borderRadius: 10
  }
})

export default ToDoItem
