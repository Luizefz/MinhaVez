import { ScrollView, StyleSheet, SafeAreaView, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useIsFocused } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';

export default function Header() {

    const navigation = useNavigation();

    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Minha Vez!</Text>

            <View style={styles.headerButtons}>

                <TouchableOpacity onPress={() => { navigation.navigate('placarFullScreen') }}>
                    <Image style={styles.headerButton} source={require('../assets/maximize-2.png')}></Image>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { }}>
                    <Image source={require('../assets/settings1.png')}></Image>
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '5%',
        paddingTop: 70,
        marginBottom: '8%',
    },
    headerText: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 24,
        height: 38,
        color: '#ffff'
    },
    headerButton: {
        width: 35,
        height: 35
    },
    headerButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 100
    }
})