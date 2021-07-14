import React, { useState } from 'react'
import { View, Text, StyleSheet, Modal, TextInput, Button, Alert } from 'react-native'
import AppButton from './ui/AppButton'

import { THEME } from '../theme'

const EditModal = ({ todo, visible, onCancel, onSave }) => {
    const [title, setTitle] = useState(todo.title)

    const onSaveHandler = () => {
        if (!title.trim()) {
            return Alert.alert('Внимание!', 'Название todo не должно быть пустым')
        }

        onSave({
            id: todo.id, title
        })
    }

    return (
        <Modal animationType="slide" visible={visible}>
            <View style={styles.wrap}>
                <TextInput style={styles.input} placeholder="Введите название" autoCapitalize="none" autoCorrect={false} value={title} onChangeText={setTitle} />
                <View style={styles.buttons}>
                    <AppButton onPress={() => onCancel()} color={THEME.DANGER_COLOR}>
                        Отменить
                    </AppButton>
                    <AppButton onPress={() => onSaveHandler()}>
                        Сохранить
                    </AppButton>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: 'center',
        padding: 30,
        width: '100%'
    },  
    input: {
        padding: 5,
        borderBottomColor: THEME.PRIMARY_COLOR,
        borderBottomWidth: 2
    },
    buttons: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})

export default EditModal