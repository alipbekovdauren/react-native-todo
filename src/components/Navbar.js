import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Navbar = ({ title }) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>{ title }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 100,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 15,
        backgroundColor: '#3949ab'
    },
    text: {
        color: '#fff',
        fontSize: 20,
    }
})

export default Navbar