import React, { useState } from 'react'
import { View, TextInput, Button, Alert, StyleSheet, Keyboard } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import AppButton from './ui/AppButton'

const AddTodo = ({ onSubmit }) => {
    const [value, setValue] = useState('')

    const onPressHandler = () => {
        if (!value.trim()) {
            return Alert.alert('Внимание!', 'Название todo не должно быть пустым')
        }

        onSubmit(value)
        setValue('')
        Keyboard.dismiss()
    }

    return (
        <View style={styles.block}>
            <TextInput 
                style={styles.input} 
                onChangeText={setValue}
                value={value}
                placeholder="Введите название"
                autoCorrect={false}
            />

            <AppButton style={styles.button} title="Добавить" onPress={() => onPressHandler()}>
                <Ionicons name="ios-add" size={20} color="#fff" />
            </AppButton>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    input: {
        width: '75%',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab',
        padding: 5,
    }
})

export default AddTodo