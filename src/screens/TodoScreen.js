import React, { useState } from 'react'
import { View, StyleSheet, Button } from 'react-native'

import AppCard from '../components/ui/AppCard'
import EditModal from '../components/EditModal'
import AppTextBold from '../components/ui/AppTextBold'
import { THEME } from '../theme'

const TodoScreen = ({ todo, goBack, onRemove, onSave }) => {
  const [visible, setVisible] = useState(false)

  const onSaveHandler = (todo) => {
    onSave(todo)
    setVisible(false)
  }

  return (
    <View>
      <EditModal todo={todo} visible={visible} onCancel={() => setVisible(false)} onSave={onSaveHandler} />
      <AppCard cardStyle={styles.card}>
        <AppTextBold>{ todo.title }</AppTextBold>
        <Button title="Ред." onPress={() => setVisible(true)} />
      </AppCard>

      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button title="Назад" color={ THEME.GREY_COLOR } onPress={() => goBack()} />
        </View>
        
        <View style={styles.button}>
          <Button title="Удалить" color={ THEME.DANGER_COLOR } onPress={() => onRemove(todo.id)} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    width: '40%'
  },
  card: {
    marginBottom: 15
  }
})

export default TodoScreen