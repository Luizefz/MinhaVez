import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { Component } from 'react'

export default class Placar extends Component {
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.placarCounter}>

                    <TouchableOpacity style={styles.counterOrange} onPress={() => { }}>

                        <Text style={styles.counterNumber} >01</Text>

                    </TouchableOpacity>

                    <Text style={styles.counterVS}>VS</Text>

                    <TouchableOpacity style={styles.counterGreen} onPress={() => { }}>

                        <Text style={styles.counterNumber}>05</Text>

                    </TouchableOpacity>

                </View>

                <View style={styles.placarEdit}>

                    <TouchableOpacity onPress={() => { }}>

                        <Image style={styles.headerButton} source={require('../assets/edit-2.png')}></Image>

                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { }}>
                        <Image style={styles.headerButton} source={require('../assets/refresh-2.png')}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { }}>
                        <Image style={styles.headerButton} source={require('../assets/edit-2.png')}></Image>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    placarCounter: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: '8%'
    },
    counterOrange: {
        width: '38%',
        height: 160,
        backgroundColor: '#E0A400',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    counterVS: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 20,
        color: '#ffff'
    },
    counterNumber: {
        width: 130,
        height: 130,
        textAlign: 'center',
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 80,
        color: '#FFFFFF',
    },
    counterGreen: {
        width: '38%',
        height: 160,
        backgroundColor: '#27D999',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    placarEdit: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: '5%'
    }

})