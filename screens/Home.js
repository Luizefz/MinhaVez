import { ScrollView, StyleSheet, SafeAreaView, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import * as ScreenOrientation from 'expo-screen-orientation';
import Animated from 'react-native-reanimated';
import { StatusBar } from 'expo-status-bar';
import Placar from '../components/Placar';
import Header from '../components/Header';
import Jogos from '../components/Jogos';


const Home = () => {

    const navigation = useNavigation();

    const position = new Animated.Value(0);

    const [orientationIsLandscape, setOrientation] = useState(true)

    
    const toggleOrientation = () => {
        setOrientation(!orientationIsLandscape);
        changeScreenOrientation();
    }

    async function changeScreenOrientation() {

        if (orientationIsLandscape == true) {
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
        }
        if (orientationIsLandscape == false) {
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                    {orientationIsLandscape && (
                        <View style={styles.header}>
                            <Text style={styles.headerText}>Minha Vez!</Text>

                            <View style={styles.headerButtons}>

                                <TouchableOpacity onPress={() => { toggleOrientation() }}>
                                    <Image style={styles.headerButton} source={require('../assets/maximize-2.png')}></Image>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => { }}>
                                    <Image source={require('../assets/settings1.png')}></Image>
                                </TouchableOpacity>

                            </View>
                        </View>
                    )}
                    {!orientationIsLandscape &&
                    <View style={ styles.headerMinimize }> 
                        <TouchableOpacity style={styles.headerButtonsMinimize} onPress={() => { toggleOrientation() }}>
                            <Image style={styles.headerButton} source={require('../assets/minimize-2.png')}></Image>

                            <StatusBar hidden={true} />

                        </TouchableOpacity>
                        </View>
                    }

                    <Placar />
                    <Jogos />


                </View>
                <StatusBar style="light" />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
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
        width: 36,
        height: 36
    },
    headerButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 100
    },
    headerMinimize: {
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    headerButtonsMinimize: {
        padding: '3%',
        paddingLeft: 0,
        paddingBottom: 3
    }
})