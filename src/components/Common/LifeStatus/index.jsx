import { StyleSheet, View } from "react-native";
import Lottie from 'lottie-react-native'


export function LifeStatus() {
  return (
    <View style={styles.container}>
      <Lottie 
      source={require('../../../Assets/education/education-100.json')}
      autoPlay
      loop
      style={styles.eduAnimation}
      />
      <Lottie 
      source={require('../../../Assets//money/money-100.json')}
      autoPlay
      loop
      style={styles.money}
      />
      <Lottie 
      source={require('../../../Assets/robot/robot-100-100.json')}
      autoPlay
      loop
      style={styles.robotAnimation}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 300,
  },
  eduAnimation: {
    width: 100,
    marginTop: 50,
    marginLeft: 5,
    position: 'absolute'
  },
  money: {
    width: 100,
    marginTop: 50,
    marginLeft: 95,
    position: 'absolute'
  },
  robotAnimation: {
    width: 190,
    marginTop: 30,
    marginLeft: 25,
  },
})