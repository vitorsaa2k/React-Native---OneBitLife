import { StyleSheet, Text, TouchableOpacity, View } from "react-native"


export function EditHabit({habit, frequency, habitArea, checkColor}) {
  
  function handleEdit() {
    console.log('teasd')
  }

  function handleCheck() {
    console.log(`botao de check do ${habitArea}`)
  }
  
  
  return (
    <TouchableOpacity 
      activeOpacity={.8} 
      style={styles.button}
      onPress={handleEdit}
    >
      <View style={styles.habitText}>
        <Text style={styles.habitTitle}>
          {habit}
        </Text>
        <Text style={styles.habitFrequency}>
          {frequency}
        </Text>
      </View>
      <TouchableOpacity
        onPress={handleCheck}
        style={[styles.check, {borderColor: checkColor}]}
      >
        
      </TouchableOpacity>

    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#151515",
    borderRadius: 5,
    width: 320,
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  habitTitle: {
    color: "white",
    fontWeight: "bold",
  },
  habitFrequency: {
    color: "white",
  },
  check: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 10,
  },
})