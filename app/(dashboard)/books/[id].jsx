import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'
import ThemedCard from '../../components/ThemedCard'
import ThemedButton from '../../components/ThemedButton'

const BookDetails = () => {
  return (
    <ThemedView safe={true} style={styles.container} >
        <ThemedText>
         Book details
        </ThemedText>
        </ThemedView>
  )
}

export default BookDetails

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"stretch"
    }
})