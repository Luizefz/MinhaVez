import { Dimensions, StyleSheet, Text, View, Vibration } from 'react-native'
import { useAtom } from 'jotai';
import Animated, { FadeInDown, FadeOutUp } from 'react-native-reanimated';
import Toast from 'react-native-simple-toast';
import { StatusBar } from 'expo-status-bar';
import TouchableSwipe from 'react-native-touchable-swipe'
import * as ScreenOrientation from 'expo-screen-orientation';
import { counterTeamGreen, counterTeamOrange } from '../components/Counters/DataCounter';
import React, { useEffect } from 'react'

const PlacarFullScreen = () => {


  const [TeamOrangeCounter, setTeamOrangeCounter] = useAtom(counterTeamOrange);
  const [TeamGreenCounter, setTeamGreenCounter] = useAtom(counterTeamGreen);


  useEffect(() => {
    changeScreenOrientation(true)

  }, [])

  async function changeScreenOrientation(turn) {

    if (turn == true) {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

    }
    if (turn == false) {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
    }
  }

  function addToCounterOrange(swipe) {

    switch (swipe) {
      case 'Up':
        if (TeamOrangeCounter < 99) {
          setTeamOrangeCounter(TeamOrangeCounter + 1)
          Vibration.vibrate(50)
        }
        break;
      case 'Down':
        if (TeamOrangeCounter >= 1) {
          setTeamOrangeCounter(TeamOrangeCounter - 1)
          Vibration.vibrate(50)
        }
        break;
    }

  }

  function addToCounterGreen(swipe) {

    switch (swipe) {
      case 'Up':
        if (TeamGreenCounter < 99) {
          setTeamGreenCounter(TeamGreenCounter + 1)
          Vibration.vibrate(50)
        }
        break;
      case 'Down':
        if (TeamGreenCounter >= 1) {
          setTeamGreenCounter(TeamGreenCounter - 1)
          Vibration.vibrate(50)
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
        <StatusBar style="light" hidden />

      </View>

    </View>
  )
}

export default PlacarFullScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  placarCounter: {
    flexDirection: 'row',
    height: Dimensions.get('window').height,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  counterOrange: {
    width: Dimensions.get('window').width * 0.45,
    height: Dimensions.get('window').height * 0.9,
    backgroundColor: '#E0A400',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  counterVS: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 30,
    color: '#ffff'
  },
  counterNumber: {
    // width: 250,
    height: Dimensions.get('window').height * 0.7,
    textAlign: 'center',
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 180,
    color: '#FFFFFF',
  },
  counterGreen: {
    width: Dimensions.get('window').width * 0.45,
    height: Dimensions.get('window').height * 0.9,
    backgroundColor: '#00BD79',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
})