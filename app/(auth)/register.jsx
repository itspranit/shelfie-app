import { Keyboard, StyleSheet,Text} from 'react-native'
import React, { useState } from 'react'
import Spacer from '../../components/Spacer'
import {Link} from 'expo-router'
import {Colors} from "../../constants/Colors"


import ThemedView from '../../components/Themedview'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'
import { TouchableWithoutFeedback } from 'react-native/types_generated/index'


const Register = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('') 
  const handlesubmit=()=>{
    console.log("registered",email,password)
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <ThemedView style={styles.container}>
    <Spacer/>

    <ThemedText title={true}>register for your account</ThemedText>

    <ThemedTextInput placeholder="Email" 
       style={{width:'80%',marginBottom:20}}
       keyboardType="email-address"
       onChangeText={setEmail}
       value={email}
       />

    <ThemedTextInput placeholder="password" 
       style={{width:'80%',marginBottom:20}}
       keyboardType="password"
       onChangeText={setPassword}
       value={password}
       secureTextEntry
       />

    <ThemedButton onPress={handlesubmit}>
      <Text style={{color:'#f2f2f2'}}>Register</Text>
    </ThemedButton>

    <Spacer/>
    <Link href="/login"><ThemedText>login instead</ThemedText></Link>

    </ThemedView>
    </TouchableWithoutFeedback>
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