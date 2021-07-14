import React from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'

import AppText from './ui/AppText'
import { THEME } from '../theme'

const Navbar = ({ title }) => {
    return (
        <View style={{ 
            ...styles.navbar, ...Platform.select({
            ios: styles.navbarIos,
            android: styles.navbarAndroid
            }) 
        }}>
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
    },
    navbarAndroid: {
        backgroundColor: THEME.PRIMARY_COLOR
    },
    navbarIos: {
        backgroundColor: '#fff',
        color: THEME.PRIMARY_COLOR,
        borderBottomColor: THEME.PRIMARY_COLOR,
        borderBottomWidth: 1
    },
    text: {
        color: '#fff',
        fontSize: 20,
    }
})

export default Navbar