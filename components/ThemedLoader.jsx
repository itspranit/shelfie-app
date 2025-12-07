import {ActivityIndicator,useColorScheme} from 'react-native'
import {Colors} from '../constants/Colors'
import Themedview from './Themedview'

const ThemedLoader =()=>{
    const colorScheme=useColorScheme()
    const theme = Colors[colorScheme]?? Colors.light

    return (
        <Themedview style={{
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        }}>
        <ActivityIndicator size="large" color={theme.text}></ActivityIndicator>
        </Themedview>
    )
}

export default ThemedLoader