import { StyleSheet, FlatList, Pressable} from 'react-native'
import { useBooks } from '../../hooks/useBooks'
import { Colors } from '../../constants/Colors'

import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'
import ThemedCard from '../../components/ThemedCard'

const Books = () => {
  const {books} =useBooks()

  return (
    <ThemedView style={styles.container} safe={true}>

      <Spacer />
      <ThemedText title={true} style={styles.heading}>
        Your Reading List
      </ThemedText>
    <Spacer/>
    <FlatList 
      data={books}
      keyExtractor={()=>item.$id}
      contentContainerStyle={styles.list}
      renderItem={({item})=>(
        <Pressable>
          <ThemedCard style={styles.card}>
              <ThemedText style={styles.title}>
                    {item.title}
              </ThemedText>
              <ThemedText style={styles.title}>
                    {item.Author}
              </ThemedText>
          </ThemedCard>
        </Pressable>
      )}/>
    </ThemedView>
  )
}

export default Books

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //justifyContent: "center",
      alignItems: "center",
    },
    heading: {
      fontWeight: "bold",
      fontSize: 18,
      textAlign:"center"
    },
    list:{
      marginTop:40
    },
    card:{
      width:"90%",
      marginHorizontal:"5%",
      marginVertical:10,
      padding:10,
      paddigLeft:14,
      borderLeftColor:Colors.primary,
      borderLeftWidth:4
    },
    title:{
      fontSize:20,
      fontWeight:"bold",
      marginBottom:10
    },
   
  })