import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import AddTodo from '../components/AddTodo'
import Todo from '../components/Todo'

const MainScreen = ({ addTodo, removeTodo, openTodo, todos }) => {
  return (
    <View>
      <AddTodo onSubmit={addTodo} />

      <FlatList 
        keyExtractor={item => item.id}
        data={todos}
        renderItem={({ item }) => (
          <Todo todo={ item } onRemove={ removeTodo } onOpen={ openTodo } />
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
    paddingBottom: 250
  }
})

export default MainScreen