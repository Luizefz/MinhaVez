import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import HomeScreen from './screens/Home';


export default function App() {

  const Stack = createStackNavigator();

  const fonts = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fonts) {
    return <AppLoading />;
  }


  return (
    <NavigationContainer>

      <Stack.Navigator
        screenOptions={{
          gestureEnabled: false,
          ...TransitionPresets.DefaultTransition,
        }}>
        <Stack.Screen options={{ headerShown: false}} name="Minha Vez" component={HomeScreen} />
      </Stack.Navigator>

      <StatusBar style="light" />

    </NavigationContainer>

  );
}

const styles = StyleSheet.create({});
