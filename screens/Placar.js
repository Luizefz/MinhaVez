import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';


const Placar = () => {
    return (
        <View style={styles.container}>
            <Text>Placar</Text>
        </View>
    )
}

export default Placar

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})