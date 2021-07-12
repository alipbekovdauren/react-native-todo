import React from 'react'
import { View, StyleSheet, FlatList, Image } from 'react-native'
import AddTodo from '../components/AddTodo'
import Todo from '../components/Todo'

const MainScreen = ({ addTodo, removeTodo, openTodo, todos }) => {
  let content = (
    <FlatList 
      keyExtractor={item => item.id}
      data={todos}
      renderItem={({ item }) => (
        <Todo todo={ item } onRemove={ removeTodo } onOpen={ openTodo } />
      )}
      contentContainerStyle={styles.list}
    />
  )

  if (!todos.length) {
    content = (
      <View style={styles.imageWrap}>
        <Image style={styles.image} source={require('../../assets/icon.png')} />
      </View>
    )
  }

  return (
    <View>
      <AddTodo onSubmit={addTodo} />

      { content }
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
    paddingBottom: 250
  },
  imageWrap: {
    padding: 30,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  }
})

export default MainScreen