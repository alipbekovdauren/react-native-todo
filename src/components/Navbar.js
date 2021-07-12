import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import AppText from './ui/AppText'
import { THEME } from '../theme'

const Navbar = ({ title }) => {
    return (
        <View style={styles.navbar}>
            <AppText style={styles.text}>{ title }</AppText>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 100,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 15,
        backgroundColor: THEME.PRIMARY_COLOR
    },
    text: {
        color: '#fff',
        fontSize: 20,
    }
})

export default Navbar