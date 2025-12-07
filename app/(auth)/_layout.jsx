import {StatusBar} from 'expo-status-bar'
import {Stack} from 'expo-router'
import { useUser } from '../../hooks/useUser'
import GuestOnly from '../../components/auth/GuestOnly'


const Authlayout = () => {
 
  const {user}=useUser()
  console.log(user)
  return (
    <GuestOnly>
    <StatusBar style="auto" />
    <Stack screenOptions={{headerShown:false,animation:"none"}} />
    </GuestOnly>
  )
  
}

export default Authlayout

