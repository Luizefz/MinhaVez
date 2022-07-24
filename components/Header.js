import { ScrollView, StyleSheet, SafeAreaView, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { Component, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import * as ScreenOrientation from 'expo-screen-orientation';

export default function Header() {

    const navigation = useNavigation();

    const [orientationIsLandscape,setOrientation]=useState(true)
    const [buttonMaxMin, setButtonMaxMin] = useState()
    const maximizeImg = '../assets/maximize-2.png'
    const minimizeImg = '../assets/minimize-2.png'

    const toggleOrientation = () => {
        setOrientation(!orientationIsLandscape)
        changeScreenOrientation()
      }

    async function changeScreenOrientation() {

        if( orientationIsLandscape == true ){
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
            setButtonMaxMin(maximizeImg)
            
        }
        if( orientationIsLandscape == false ){
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
            setButtonMaxMin(minimizeImg)
        }
    }

    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Minha Vez!</Text>

            <View style={styles.headerButtons}>

                <TouchableOpacity onPress={() => { toggleOrientation() }}>
                    <Image style={styles.headerButton} source={require(minimizeImg)}></Image>
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