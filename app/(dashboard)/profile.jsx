import { StyleSheet } from 'react-native'
import { useUser } from '../../hooks/useUser'

import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/Themedview'


const Profile = () => {
  //to log the user out
 const {logout}=useUser()

  return (
    <ThemedView style={styles.container}>

      <ThemedText title={true} style={styles.heading}>
        Your Email
      </ThemedText>

      <Spacer />

      <ThemedText>
        Time to start reading some books...
      </ThemedText>
      <Spacer />
      <ThemedButton onPress={logout}>
        <Text style={{color:'#f2f2f2'}}>Logout</Text>
      </ThemedButton>

    </ThemedView>
  )
}

export default Profile

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    heading: {
      fontWeight: "bold",
      fontSize: 18,
      textAlign:"center"
    },
   
  })