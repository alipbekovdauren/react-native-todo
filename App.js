import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import Navbar from './src/components/Navbar';
import MainScreen from './src/screens/MainScreen';
import TodoScreen from './src/screens/TodoScreen';

const App = () => {
  const [todos, setTodos] = useState([])
  const [todoId, setTodoId] = useState(null)

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
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
  }

  const openTodo = (id) => {
    setTodoId(id)
  }

  const goBack = () => {
    setTodoId(null)
  } 

  let content = <MainScreen addTodo={addTodo} removeTodo={removeTodo} openTodo={openTodo} todos={todos} />

  if (todoId) {
    const selectedTodo = todos.find(todo => todo.id === todoId)

    content = <TodoScreen goBack={goBack} todo={selectedTodo} />
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
