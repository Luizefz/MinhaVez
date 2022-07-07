import { Keyboard, StyleSheet, Text, TouchableOpacity, View, Image, TextInput, ScrollView, Dimensions, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native'
import Animated, {
    FadeInDown, FadeOutUp,
    useSharedValue,
    withSpring,
    useAnimatedStyle,
    useAnimatedGestureHandler,
    runOnJS,
    FadeIn,
    FadeOut
} from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Toast from 'react-native-simple-toast';
import Modal from "react-native-modal";
import React, { useState, useRef } from 'react'

export default function Placar() {

    const [counterTeamOrange, setconterTeamOrange] = useState(0);
    const [counterTeamGreen, setconterTeamGreen] = useState(0);

    const [isModalVisible01, setModalVisible01] = useState(false);
    const [isModalVisible02, setModalVisible02] = useState(false);
    const inputRef = useRef();

    function clearPlacar() {
        setconterTeamGreen(0)
        setconterTeamOrange(0)
    }

    const yOrange = useSharedValue(0);
    const yGreen = useSharedValue(0);

    const animationCountOrange = useAnimatedGestureHandler({
        onStart: (_, cty) => {
            cty.startY = yOrange.value;
        },
        onActive: (event, cty) => {
            yOrange.value = cty.startY + event.translationY;
        },
        onEnd: (_) => {
            yOrange.value = withSpring(0);

        },
        onFinish: (_) => {
            if (yOrange.value < 0) {
                runOnJS(setconterTeamOrange)(counterTeamOrange + 1);
            };
            if (yOrange.value > 0) {
                runOnJS(setconterTeamOrange)(counterTeamOrange - 1);
            };
        }
    });

    const animationCountGreen = useAnimatedGestureHandler({
        onStart: (_, cty) => {
            cty.startY = yGreen.value;
        },
        onActive: (event, cty) => {
            yGreen.value = cty.startY + event.translationY;
        },
        onEnd: (_) => {
            yGreen.value = withSpring(0);

        },
        onFinish: (_) => {
            if (yGreen.value < 0) {
                runOnJS(setconterTeamGreen)(counterTeamGreen + 1);
            };
            if (yGreen.value > 0) {
                runOnJS(setconterTeamGreen)(counterTeamGreen - 1);
            };
        }
    });
    const animatedOrange = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY: yOrange.value,
                },
            ],
        };
    });

    const animatedGreen = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY: yGreen.value,
                },
            ],
        };
    });



    return (
        <View style={styles.container}>

            <View style={styles.placarCounter}>

                <View style={styles.counterOrange}>
                    <PanGestureHandler onGestureEvent={animationCountOrange}>

                        <Animated.Text
                            style={[styles.counterNumber, animatedOrange]}
                            key={counterTeamOrange}
                            entering={FadeIn.duration(200)}
                            exiting={FadeOut.duration(80)}
                        >
                            {counterTeamOrange}
                        </Animated.Text>

                    </PanGestureHandler>
                </View>

                <Text style={styles.counterVS}>VS</Text>

                <View style={styles.counterGreen}>
                    <PanGestureHandler onGestureEvent={animationCountGreen}>

                        <Animated.Text
                            style={[styles.counterNumber, animatedGreen]}
                            key={counterTeamGreen}
                            entering={FadeIn.duration(200)}
                            exiting={FadeOut.duration(80)}
                        >
                            {counterTeamGreen}
                        </Animated.Text>

                    </PanGestureHandler>
                </View>

            </View>

            <View style={styles.placarEdit}>

                <TouchableOpacity
                    onPress={() => { }}>
                    <Image style={styles.headerButton} source={require('../assets/edit-2.png')} />

                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => { Toast.show('Segure para zerar o placar.', Toast.LONG) }}
                    onLongPress={() => { clearPlacar() }}>

                    <Image style={styles.headerButton} source={require('../assets/refresh-2.png')} />

                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => { }}>
                    <Image style={styles.headerButton} source={require('../assets/edit-2.png')} />

                </TouchableOpacity>
            </View>

            {/* <Modal
                style={styles.modalContainer}
                isVisible={isModalVisible01}
                deviceWidth={Dimensions.get("window").width}
                onBackdropPress={() => setModalVisible01(false)}
                onModalShow={() => { inputRef.current.focus() }}
            >
                <KeyboardAvoidingView enabled behavior={Platform.OS === "android" ? undefined : "position"}>
                    <ScrollView scrollEnabled={false} keyboardShouldPersistTaps="handled">
                        <View style={styles.modalContent}>
                            <TextInput
                                style={styles.placarInput01}
                                keyboardType={'number-pad'}
                                // placeholder={counterTeamOrange}
                                onChangeText={() => {}}
                                ref={inputRef}
                                caretHidden={true}
                                maxLength={2}
                                onSubmitEditing={() => {setModalVisible01(false)}}>
                            </TextInput>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </Modal>

            <Modal
                style={styles.modalContainer}
                isVisible={isModalVisible02}
                deviceWidth={Dimensions.get("window").width}
                onBackdropPress={() => setModalVisible02(false)}
                onModalShow={() => { inputRef.current.focus() }}
            >
                <KeyboardAvoidingView enabled behavior={Platform.OS === "android" ? undefined : "position"}>
                    <ScrollView scrollEnabled={false} keyboardShouldPersistTaps="handled">
                        <View style={styles.modalContent}>
                            <TextInput
                                style={styles.placarInput02}
                                keyboardType='numeric'
                                onChangeText={() => {}}
                                numeric value  
                                ref={inputRef}
                                caretHidden={true}
                                maxLength={2}
                                onSubmitEditing={() => setModalVisible02(false)}>
                            </TextInput>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </Modal> */}
        </View>
    )
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
        backgroundColor: '#00BD79',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    placarEdit: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: '5%'
    },
    placarInput01: {
        borderRadius: 8,
        backgroundColor: '#E0A400',
        textAlign: 'center',
        paddingTop: 23,
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 40,
        color: '#FFFFFF',

    },
    placarInput02: {
        borderRadius: 8,
        backgroundColor: '#00BD79',
        textAlign: 'center',
        paddingTop: 23,
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 40,
        color: '#FFFFFF',

    },
    modalContainer: {
        justifyContent: 'flex-end'
    },
    modalContent: {
        flex: 1
    }

})