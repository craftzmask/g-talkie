import { Image, Text, View, Pressable, StyleSheet, SafeAreaView } from 'react-native'

import imageSrc from '../assets/intro-image.png'
import iconSrc from '../assets/app-icon.png'

import Button from '../components/Button'

const Intro = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.icon}
        source={iconSrc}
      />

      <View>
        <Text style={styles.title}>G-Talkie Everywhere</Text>
        <Text style={styles.paragraph}>Words can shape the future</Text>
        <Text style={styles.paragraph}>The power of speech is in your hands</Text>
      </View>

      <Image
        style={styles.image}
        source={imageSrc}
      />

      <Button text='GET STARTED' />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: '#D6665C',
    textAlign: 'center'
  },
  paragraph: {
    marginTop: 15,
    textAlign: 'center',
  },
  icon: {
    resizeMode: 'contain',
    width: 120,
    marginBottom: 20,
    marginLeft: 25
  },
  image: {
    resizeMode: 'contain',
    width: 380,
    height: 240,
    marginTop: 40
  }
})

export default Intro