import React, { useState } from 'react'
import { View, StyleSheet, Button, Dimensions } from 'react-native'
import { AntDesign, FontAwesome, Feather, MaterialIcons } from '@expo/vector-icons'

import AppCard from '../components/ui/AppCard'
import EditModal from '../components/EditModal'
import AppTextBold from '../components/ui/AppTextBold'
import AppButton from '../components/ui/AppButton'
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
        <AppButton onPress={() => setVisible(true)}>
          <Feather name="edit-2" size={20} color="#fff" />
        </AppButton>
      </AppCard>

      <View style={styles.buttons}>
        <View style={styles.button}>
          <AppButton color={ THEME.GREY_COLOR } onPress={() => goBack()}>
            <AntDesign name="back" size={20} color="#fff" />
          </AppButton>
        </View>
        
        <View style={styles.button}>
          <AppButton color={ THEME.DANGER_COLOR } onPress={() => onRemove(todo.id)}>
            <MaterialIcons name="delete-forever" size={20} color="#fff" />
          </AppButton>
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
    width: Dimensions.get('window').width / 3
  },
  card: {
    marginBottom: 15
  }
})

export default TodoScreen