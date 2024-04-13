import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import useApp from './hooks/App/useApp';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const {onLayoutLoadHandler} = useApp();
  return (
    <View style={styles.container} onLayout={onLayoutLoadHandler}>
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      <Text style={styles.text1}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontFamily:'roboto-light',
    fontSize:20,
  },
  text1:{
    fontFamily:'roboto-blackItalic',
    fontSize:20,
  }
});
