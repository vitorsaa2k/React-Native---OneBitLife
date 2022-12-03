import { StyleSheet, Text, TouchableOpacity } from "react-native";



export function DefaultButton({
  buttonText,
  handlePress,
  width,
  height,
}) {
  return (
    <TouchableOpacity
      style={[styles.button, {width: width, height: height}]}
      activeOpacity={0.7}
      onPress={handlePress}
    >
      <Text style={styles.buttonText}>{buttonText}</Text>


    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: '#FFF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    color: '#FFF'
  }
})