import { ScrollView, StyleSheet, SafeAreaView, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useIsFocused } from "@react-navigation/native";
import * as ScreenOrientation from 'expo-screen-orientation';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Placar from '../components/Placar';
import Header from '../components/Header';
import Jogos from '../components/Jogos';


const Home = () => {

    const navigation = useNavigation();

    const isVisible = useIsFocused();

    async function changeScreenOrientation(turn) {

        if (turn == true) {
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

        }
        if (turn == false) {
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
        }
    }

    useEffect(() => {

        if (isVisible) {
            setTimeout(() => {
                changeScreenOrientation(false)
            }, 100);
        }

    }, [isVisible])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>

                    <Header />

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