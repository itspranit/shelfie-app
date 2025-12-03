import { StyleSheet,Text} from 'react-native'
import React from 'react'
import Spacer from '../../components/Spacer'
import {Link} from 'expo-router'
import {Colors} from "../../constants/Colors"

import ThemedView from '../../components/Themedview'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'


const Register = () => {
  const handlesubmit=()=>{
    console.log("registered")
  }
  return (
    <ThemedView style={styles.container}>
    <Spacer/>

    <ThemedText title={true}>register for your account</ThemedText>

    <ThemedButton onPress={handlesubmit}>
      <Text style={{color:'#f2f2f2'}}>Register</Text>
    </ThemedButton>

    <Spacer/>
    <Link href="/login"><ThemedText>login instead</ThemedText></Link>

    </ThemedView>
  )
}

export default Register

const styles= StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',//algin in center in x direction
      justifyContent:'center'//align in center in y axis
    },
    title:{
        fontWeight:'bold',
        fontSize:18
    },
    link:{
        marginVertical:10,
        borderBottomWidth:1
    },
    btn:{
      backgroundColor:Colors.primary,
      padding:15,
      borderRadius:5
    },
    pressed:{
      opacity:0.8
    }
})