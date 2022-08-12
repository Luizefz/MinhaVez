import { StyleSheet, Text, TouchableOpacity, View, Image, Dimensions } from 'react-native'
import Animated, { FadeInDown, FadeOutUp } from 'react-native-reanimated';
import Toast from 'react-native-simple-toast';
import TouchableSwipe from 'react-native-touchable-swipe'
import Modal from "react-native-modal";
import { useAtom } from 'jotai';
import { counterTeamGreen, counterTeamOrange } from './Counters/DataCounter';
import React, { useState } from 'react'

export default function Placar() {

    const [TeamOrangeCounter, setTeamOrangeCounter] = useAtom(counterTeamOrange);
    const [TeamGreenCounter, setTeamGreenCounter] = useAtom(counterTeamGreen);

    const [isModalVisible01, setModalVisible01] = useState(false);
    const [isModalVisible02, setModalVisible02] = useState(false);

    function clearPlacar() {
        setTeamGreenCounter(0)
        setTeamOrangeCounter(0)
    }

    function addToCounterOrange(swipe) {

        switch (swipe) {
            case 'Up':
                if (TeamOrangeCounter < 99) {
                    setTeamOrangeCounter(TeamOrangeCounter + 1)
                }
                break;
            case 'Down':
                if (TeamOrangeCounter >= 1) {
                    setTeamOrangeCounter(TeamOrangeCounter - 1)
                }
                break;
        }

    }

    function addToCounterGreen(swipe) {

        switch (swipe) {
            case 'Up':
                if (TeamGreenCounter < 99) {
                    setTeamGreenCounter(TeamGreenCounter + 1)
                }
                break;
            case 'Down':
                if (TeamGreenCounter >= 1) {
                    setTeamGreenCounter(TeamGreenCounter - 1)
                }
                break;
        }

    }



    return (
        <View style={styles.container}>

            <View style={styles.placarCounter}>

                <TouchableSwipe
                    style={styles.counterOrange}
                    onPress={() => { Toast.show('Arraste para cima/baixo para pontuar') }}
                    onSwipeUp={() => { addToCounterOrange('Up') }}
                    onSwipeDown={() => { addToCounterOrange('Down') }}>

                    <Animated.Text
                        style={styles.counterNumber}
                        key={TeamOrangeCounter}
                        entering={FadeInDown.duration(150)}
                        exiting={FadeOutUp.duration(80)}>{TeamOrangeCounter}
                    </Animated.Text>

                </TouchableSwipe>

                <Text style={styles.counterVS}>VS</Text>

                <TouchableSwipe
                    style={styles.counterGreen}
                    onPress={() => { Toast.show('Arraste para cima/baixo para pontuar') }}
                    onSwipeUp={() => { addToCounterGreen('Up') }}
                    onSwipeDown={() => { addToCounterGreen('Down') }}>

                    <Animated.Text
                        style={styles.counterNumber}
                        key={TeamGreenCounter}
                        entering={FadeInDown.duration(200)}
                        exiting={FadeOutUp.duration(80)}>{TeamGreenCounter}
                    </Animated.Text>

                </TouchableSwipe>

            </View>

            <View style={styles.placarEdit}>

                <TouchableOpacity
                    onPress={() => { setModalVisible01(true) }}>
                    <Image style={styles.headerButton} source={require('../assets/check-square.png')} />

                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => { Toast.show('Segure para zerar o placar.', Toast.LONG) }}
                    onLongPress={() => { clearPlacar(), Toast.show('Placar zerado.') }}>

                    <Image style={styles.headerButton} source={require('../assets/refresh-2.png')} />

                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => { setModalVisible02(true) }}>
                    <Image style={styles.headerButton} source={require('../assets/check-square.png')} />

                </TouchableOpacity>
            </View>

            <Modal
                style={styles.modalContainer}
                isVisible={isModalVisible01}
                animationIn={'fadeInUp'}
                animationOut={'fadeOutDown'}
                deviceWidth={Dimensions.get("window").width}
                onBackButtonPress={() => { setModalVisible01(false) }}
                onBackdropPress={() => setModalVisible01(false)}
            >

                <View style={styles.modalCard}>
                    <Text style={styles.modalCardText}>Declarar o time Laranja vencedor?</Text>
                    <View style={styles.modalCardOptions}>
                        <TouchableOpacity style={styles.modalCardButton} onPress={() => {setModalVisible01(false)}}>
                            <Text style={styles.modalCardButtonText}>👍🏽</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalCardButton} onPress={() => {setModalVisible01(false)}}>
                            <Text style={styles.modalCardButtonText}>👎🏽</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </Modal>

            <Modal
                style={styles.modalContainer}
                isVisible={isModalVisible02}
                animationIn={'fadeInUp'}
                animationOut={'fadeOutDown'}
                deviceWidth={Dimensions.get("window").width}
                onBackButtonPress={() => { setModalVisible02(false) }}
                onBackdropPress={() => setModalVisible02(false)}
            >

                <View style={styles.modalCard}>
                    <Text style={styles.modalCardText}>Declarar o time Verde vencedor?</Text>
                    <View style={styles.modalCardOptions}>
                        <TouchableOpacity style={styles.modalCardButton} onPress={() => {setModalVisible02(false)}}>
                            <Text style={styles.modalCardButtonText}>👍🏽</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalCardButton} onPress={() => {setModalVisible02(false)}}>
                            <Text style={styles.modalCardButtonText}>👎🏽</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%'
        // alignSelf: 'center',
    },
    placarCounter: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        // height: '100%'
        // marginTop: '8%'
    },
    counterOrange: {
        maxWidth: '100%',
        minWidth: '38%',
        maxHeight: 300,
        minHeight: 160,
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
        backgroundColor: '#00BD79',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    if (orientationIsLandscape) {
        
    },
    placarEdit: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: '5%'
    },
    headerButton: {
        width: 30,
        height: 30
    },
    modalContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalCard: {
        alignItems: 'center',
        backgroundColor: '#454545',
        borderRadius: 14,
        height: '45%'
    },
    modalCardText: {
        textAlign: 'center',
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 28,
        color: '#FFFFFF',
        padding: '5%'
    },
    modalCardOptions: {
        // flex: 1,
        flexDirection: 'row',
        marginTop: 20
    },
    modalCardButton: {
        width: 110,
        height: 110,
        marginHorizontal: 15,
        backgroundColor: '#858585',
        borderRadius: 100,
    },
    modalCardButtonText: {
        textAlign: 'center',
        fontFamily: 'Poppins_500Medium',
        color: '#FFFFFF',
        fontSize: 40,
        padding: 25,
        opacity: 0.9
    }

})
