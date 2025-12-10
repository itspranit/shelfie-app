import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router, useGlobalSearchParams, useLocalSearchParams } from 'expo-router'
import { useEffect,useState } from 'react'
import { useBooks } from '../../../hooks/useBooks'

import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'
import ThemedCard from '../../components/ThemedCard'
import ThemedLoader from '../../components/ThemedLoader'
import ThemedButton from '../../components/ThemedButton'
import { Color } from 'react-native/types_generated/Libraries/Animated/AnimatedExports'
import { Colors } from '../../../constants/Colors'

const BookDetails = () => {
    const [book,setBook] = useState(null)
    const {id}=useGlobalSearchParams()//here inside the curly braces we can destructure can attr we wanr but it should match the file name inside square bracket ie [id]
    const {fetchBookById} =useBooks()
    useEffect(()=>{
        async function loadBook(){
            const bookData=await fetchBookById(id)
            setBook(bookData)
        }

        loadBook()
    },[id])

   const handleDelete =async()=>{
     await deleteBook(id)
     setBook(null)
     router.replace('/books')
   }
   
    if(!book){
        return(
            <ThemedView safe={true} style={styles.container}>
                <ThemedLoader />
           </ThemedView>

        )
    }
    return (
    <ThemedView safe={true} style={styles.container} >
       <ThemedCard>
       <ThemedText>
            {book.title}
        </ThemedText>
        <ThemedText>
            written by {book.author}
        </ThemedText>
        <Spacer />
        <ThemedText title={true}>
         Book description
        </ThemedText>
        <Spacer height={10}/>
        <ThemedText>
            {book.description}
        </ThemedText>
       </ThemedCard>
       <ThemedButton style={styles.delete}>
        <ThemedButton style={styles.delete} onPress={handleDelete}></ThemedButton>
        <Text style={{color:`#fff`,textAlign:'center'}}>
            DELETE BOOK
        </Text>
       </ThemedButton>
        </ThemedView>
  )
}

export default BookDetails

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"stretch"
    },
    title:{
        fontSize:22,
        marginVertical:10,
    },
    card:{
        margin:20
    },
    delete:{
        marginTop:40,
        backgroundColor:Colors.warning,
        alignSelf:'center'
    }
})