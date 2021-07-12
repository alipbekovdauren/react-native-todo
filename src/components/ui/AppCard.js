import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const AppCard = ({ children, cardStyle }) => (
    <View style={{ ...styles.default, ...cardStyle }}>
        { children }
    </View>
)

const styles = StyleSheet.create({
    default: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 10,
            height: 10
        },
        shadowRadius: 10,
        elevation: 8,
        padding: 15
    }
})

export default AppCard