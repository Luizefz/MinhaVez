import { ScrollView, StyleSheet, SafeAreaView, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>Minha Vez!</Text>

                <View style={styles.headerButtons}>

                    <TouchableOpacity onPress={() => { }}>
                        <Image style={styles.headerButton} source={require('../assets/maximize-2.png')}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { }}>
                        <Image source={require('../assets/settings1.png')}></Image>
                    </TouchableOpacity>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '5%',
        paddingTop: 70,
        marginBottom: 10,
    },
    headerText: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 24,
        height: 38,
        color: '#ffff'
    },
    headerButton: {
        width: 30,
        height: 30
    },
    headerButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 100
    }
})