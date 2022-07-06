import { ScrollView, StyleSheet, SafeAreaView, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Placar from '../components/Placar';
import Header from '../components/Header';
import Jogos from '../components/Jogos';


const Home = () => {

    const navigation = useNavigation();
    const [counterTeamOrange, setconterTeamOrange] = useState(1);
    const [counterTeamGreen, setconterTeamGreen] = useState();

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                    
                    <Header />
                    <Placar counterOrange={counterTeamOrange} counterGreen={counterTeamGreen}/>
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

})