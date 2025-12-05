import { StyleSheet,Text} from 'react-native'
import React, { useState } from 'react'
import Spacer from '../../components/Spacer'
import {Link} from 'expo-router'
import {Colors} from "../../constants/Colors"


import ThemedView from '../../components/Themedview'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'
import { useUser } from '../../hooks/useUser'

const login = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('') /*to record and store user input */
  const [error,setError]= useState()
  const {login}=useUser()

  const handlesubmit = async() => {
    setError(null) //to reset the error if we get any in previous time

    try{
      await login(email,password)
      
    }
    catch(error){
      setError(error.message)
    }
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <ThemedView style={styles.container}>


    <Spacer/>

    <ThemedText title={true}>login to your account</ThemedText>

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

    <ThemedButton onPress={handlesubmit}><Text style={{color:'#f2f2f2'}}>Login</Text></ThemedButton>
    <Spacer />
    {error && <Text style={styles.error}>{error}</Text>}

    <Spacer/>
    <Link href="/register"><ThemedText>Register instead</ThemedText></Link>

    </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default login

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
    },
    error: {
      color: Colors.warning,
      padding: 10,
      backgroundColor: '#f5c1c8',
      borderColor: Colors.warning,
      borderWidth: 1,
      borderRadius: 6,
      marginHorizontal: 10,
    }
})