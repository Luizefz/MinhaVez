import { ScrollView, StyleSheet, SafeAreaView, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Placar from '../components/Placar';


const Home = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ marginTop: 80 }}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Minha Vez!</Text>

                    <View style={styles.headerButton}>

                        <TouchableOpacity>
                            <Image source={require('../assets/maximize-2.png')}></Image>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image source={require('../assets/settings1.png')}></Image>
                        </TouchableOpacity>

                    </View>
                </View>
                <View>

                    <Placar />

                    {/* <Text style={styles.homeButton} onPress={() => navigation.navigate('Placar')}>Home</Text> */}



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
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    headerText: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 24,
        color: '#ffff'
    },
    headerButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 100
    },
    homeButton: {
        backgroundColor: 'green',
        padding: 20,
        borderRadius: 8,
        fontSize: 30,
        color: "#ffff"
    }
})