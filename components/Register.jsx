import { Image, Text, View, StyleSheet, SafeAreaView } from 'react-native'
import Checkbox from 'expo-checkbox'
import { FontAwesome5 } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { Octicons } from '@expo/vector-icons'

import iconSrc from '../assets/app-icon.png'

import Button from '../components/Button'

import theme from '../theme'
import TextInput from './TextInput'

const Register = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.icon}
        source={iconSrc}
      />

      <Text style={styles.title}>
        Let's Get Started
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Username'
          before={<FontAwesome5
            name='user'
            size={24}
            color={theme.colors.primary} 
          />}
        />
        <TextInput
          placeholder='Email'
          before={<MaterialCommunityIcons
            name='email-outline'
            size={24}
            color={theme.colors.primary}
          />}
        />
        <TextInput
          placeholder='Password'
          before={<MaterialIcons
            name='lock-outline'
            size={24}
            color={theme.colors.primary}
          />}
          after={<Octicons
            name='eye-closed'
            size={24}
            color={theme.colors.primary}
          />}
        />
        <TextInput
          placeholder='Confirm Password'
          before={<MaterialIcons
            name='lock-outline'
            size={24}
            color={theme.colors.primary}
          />}
          after={<Octicons
            name='eye-closed'
            size={24}
            color={theme.colors.primary}
          />}
        />
      </View>

      <View style={styles.checkboxContainer}>
        <Checkbox
          color={theme.colors.primary}
          style={styles.checkbox}
        />
        <Text style={styles.paragraph}>
          By clicking here, I state that I have read and understood the terms and conditions
        </Text>
      </View>

      <Button text='SIGN UP' />

      <Text style={[styles.paragraph, { marginTop: 30 }]}>
        Already have an account? {' '}
        <Text style={styles.signIn}>Sign In</Text>
      </Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
  title: {
    fontSize: 30,
    color: theme.colors.textPrimary,
    textAlign: 'center',
    marginBottom: 40
  },
  paragraph: {
    color: theme.colors.textPrimary,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  icon: {
    resizeMode: 'contain',
    width: 120,
    marginBottom: 20,
    marginLeft: 25
  },
  inputContainer: {
    rowGap: 20
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginTop: 20
  },
  checkbox: {
    marginRight: 8
  },
  signIn: {
    textDecorationLine: 'underline'
  }
})

export default Register