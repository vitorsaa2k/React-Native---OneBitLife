import { useNavigation } from "@react-navigation/native";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { DefaultButton } from "../../components/Common/DefaultButton";
import { ExplanationCard } from "../../components/Explanation/ExplanationCard";


export function AppExplanation() {
  const navigate = useNavigation()
  const handleSetShowHome = () => {
    navigate.navigate('Home')
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.title}>
            Antes, deixa {'\n'} eu te explicar...
          </Text>

          <ExplanationCard />

          <Text style={styles.descriptionBold}>
            Pronto(a) para subir de nível na vida?
          </Text>
          <Text style={styles.description}>
            Na próxima tela você vai poder escolher {'\n'} seus 4 hábitos de forma individual.
          </Text>


          <DefaultButton
            handlePress={handleSetShowHome}
            buttonText={'Continuar'}
            width={150}
            height={50}
          />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(21, 21, 21, 0.98)',
    
  },
  title: {
    color: '#FFF',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 30,

  },
  description: {
    color: '#FFF',
    fontSize: 15,
    textAlign: 'center',
    marginVertical: 20,
  },
  descriptionBold: {
    color: '#FFF',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 15,
  },
})