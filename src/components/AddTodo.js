import React, { useState } from 'react'
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native'

const AddTodo = ({ onSubmit }) => {
    const [value, setValue] = useState('')

    const onPressHandler = () => {
        if (!value.trim()) {
            return Alert.alert('Внимание!', 'Название todo не должно быть пустым')
        }

        onSubmit(value)
        setValue('')
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
            <Button style={styles.button} title="Добавить" onPress={() => onPressHandler()} />
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
        width: '70%',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab',
        padding: 5,
    }
})

export default AddTodo