import { StyleSheet, Text, View } from 'react-native'
import { useAtom } from 'jotai';
import { counterTeamGreen, counterTeamOrange } from '../components/Counters/DataCounter';
import React from 'react'

const PlacarFullScreen = () => {

  const [TeamOrangeCounter, setTeamOrangeCounter] = useAtom(counterTeamOrange);
  const [TeamGreenCounter, setTeamGreenCounter] = useAtom(counterTeamGreen);

  return (
    <View>
      <Text>{TeamOrangeCounter}</Text>
      <Text>{TeamGreenCounter}</Text>
    </View>
  )
}

export default PlacarFullScreen

const styles = StyleSheet.create({})