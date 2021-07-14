import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'

import Navbar from './src/components/Navbar';
import MainScreen from './src/screens/MainScreen';
import TodoScreen from './src/screens/TodoScreen';

async function loadApplication() {
  await Font.loadAsync({
    'robotoRegular': require('./assets/fonts/Roboto-Regular.ttf'),
    'robotoBold': require('./assets/fonts/Roboto-Bold.ttf')
  })
}

const App = () => {
  const [todos, setTodos] = useState([
    { id: '1', title: 'Изучить React Native' },
    { id: '2', title: 'Написать мобильное приложение' }
  ])
  const [todoId, setTodoId] = useState(null)
  const [ready, setReady] = useState(false)

  if (!ready) {
    return (
      <AppLoading startAsync={loadApplication} onError={() => console.log('error')} onFinish={() => setReady(true)} />
    )
  }

  const addTodo = (title) => {
    setTodos(prevTodos => [
      ...prevTodos,
      {
        id: Date.now().toString(),
        title
      }
    ])
  }

  const removeTodo = (id) => {
    const todo = todos.find(todo => todo.id === id)

    Alert.alert(
      "Удалить todo",
      `Вы уверены что хотите удалить todo "${todo.title}"?`,
      [
        {
          text: "Отмена",
          style: "cancel"
        },
        { 
          text: "Удалить", 
          onPress: () => {
            setTodoId(null)
            setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
          } 
        }
      ]
    );
  }

  const openTodo = (id) => {
    setTodoId(id)
  }

  const updateTodo = (todo) => {
    setTodos(todos =>     
      todos.map(item => {
      if(item.id === todo.id) {
        item.title = todo.title
      }

      return item
    }))
  }

  const goBack = () => {
    setTodoId(null)
  } 

  let content = <MainScreen addTodo={addTodo} removeTodo={removeTodo} openTodo={openTodo} todos={todos} />

  if (todoId) {
    const selectedTodo = todos.find(todo => todo.id === todoId)

    content = <TodoScreen onRemove={removeTodo} goBack={goBack} todo={selectedTodo} onSave={updateTodo} />
  } 

  return (
    <View>
      <Navbar title="Todo App" />
      
      <View style={styles.container}>
        { content }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  }
});

export default App
