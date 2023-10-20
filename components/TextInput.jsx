import { TextInput as NativeTextInput, View, StyleSheet } from 'react-native'

import theme from '../theme'

const TextInput = ({ value, onChange, placeholder, before, after }) => {
  return (
    <View style={styles.container}>
      {before}
      <NativeTextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.textPrimary}
      />
      {after}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
    borderRadius: theme.borders.input,
    backgroundColor: theme.colors.input
  },
  input: {
    width: '80%',
    textAlign: 'center',
    marginLeft: 10,
  }
})

export default TextInput