import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { LifeStatus } from "../../components/Common/LifeStatus";
import { CreateHabit } from "../../components/Home/CreateHabit";
import { EditHabit } from "../../components/Home/EditHabit";
import { StatusBar } from "../../components/Home/StatusBar";


export function Home() {
  
  const navigate = useNavigation()
  const [mindHabit, setMindHabit] = useState()
  const [moneyHabit, setMoneyHabit] = useState()
  const [bodyHabit, setBodyHabit] = useState()
  const [funHabit, setFunHabit] = useState()

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.dailyChecks}> ❤ - ✅</Text>
          <LifeStatus />
          <StatusBar />
          {
          mindHabit ? (
  
          <EditHabit 
            habit={mindHabit?.habitName}
            frequency={`${mindHabit.habitTime} - ${mindHabit?.habitFrequency}`}
            habitArea={mindHabit?.habitArea}
            checkColor='#90B7F3'
          />
  
          ) : (
          <CreateHabit 
            habitArea={'Mente'} 
            borderColor='#90B7F3'
          />
          )
          }
          {
            moneyHabit ? (
            <EditHabit 
              habit={moneyHabit?.habitName}
              frequency={`${moneyHabit.habitTime} - ${moneyHabit?.habitFrequency}`}
              habitArea={moneyHabit?.habitArea}
              checkColor={'#85BB65'}
            />
            ) : ( <CreateHabit habitArea={'Financeiro'} borderColor='#85BB65' />)
          }
          {
            bodyHabit ? (
            <EditHabit 
              habit={bodyHabit?.habitName}
              frequency={`${bodyHabit.habitTime} - ${bodyHabit?.habitFrequency}`}
              habitArea={bodyHabit?.habitArea}
              checkColor={'#FF0044'}
            />
            ) : ( <CreateHabit habitArea={'Corpo'} borderColor='#FF0044' />)
          }
          {
            funHabit ? (
            <EditHabit 
              habit={funHabit?.habitName}
              frequency={`${funHabit.habitTime} - ${funHabit?.habitFrequency}`}
              habitArea={funHabit?.habitArea}
              checkColor={'#FE7F23'}
            />
            ) : ( <CreateHabit habitArea={'Humor'} borderColor='#FE7F23' />)
          }

        </View>
        <Text 
          style={styles.explanationText}
          onPress={() => {navigate.navigate('AppExplanation')}}
        >
          Ver explicação novamente
        </Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(21, 21, 21, 0.98)'
  },
  dailyChecks: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    marginTop: 40,
  },
  explanationText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 15,
    paddingBottom: 25,
  }
})