import { StatusBar } from 'expo-status-bar'
import Constants from 'expo-constants'
import { StyleSheet, View } from 'react-native'
import { TouchableWithoutFeedback, Keyboard } from 'react-native'
import Intro from './components/Intro'
import Register from './components/Register'

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Register />
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
  },
});
