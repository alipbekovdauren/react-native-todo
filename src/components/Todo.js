import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

import AppTextBold from './ui/AppTextBold'

const Todo = ({ todo, onRemove, onOpen }) => {
    return (
        <TouchableOpacity 
            onPress={() => onOpen(todo.id)}
            onLongPress={() => onRemove(todo.id)}
        >
            <View style={styles.todo}>
                <AppTextBold style={styles.todoText}>{ todo.title }</AppTextBold>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 2,
        borderColor: '#eee',
        borderRadius: 5,
        marginBottom: 10
    },
    todoText: {
        fontFamily: 'robotoBold'
    }
})

export default Todo
