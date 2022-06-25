import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

export default class Placar extends Component {
    render() {
        return (
            <View style={styles.container}>

                <TouchableOpacity style={styles.counterOrange}>

                    <Text style={styles.counterNumber} >01</Text>

                </TouchableOpacity>

                <Text style={styles.counterVS}>VS</Text>

                <TouchableOpacity style={styles.counterGreen}>

                    <Text style={styles.counterNumber}>05</Text>

                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    counterOrange: {
        width: '38%',
        backgroundColor: '#E0A400',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    counterVS:{
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 20,
        color: '#ffff'
    },
    counterNumber: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 80,
        color: '#FFFFFF',
        top: 12
    },
    counterGreen: {
        width: '38%',
        backgroundColor: '#27D999',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },

})