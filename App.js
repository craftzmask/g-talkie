import { StatusBar } from 'expo-status-bar'
import Constants from 'expo-constants'
import { StyleSheet, View } from 'react-native'

import Intro from './components/Intro'

export default function App() {
  return (
    <View style={styles.container}>
      <Intro />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
  },
});
