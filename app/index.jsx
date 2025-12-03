import { StyleSheet,Text} from 'react-native';
import {Link} from 'expo-router'


//themed compoments
import ThemedView from '../components/Themedview'
import ThemedLogo from '../components/ThemedLogo'
import ThemedText from '../components/ThemedText'
import Spacer from '../components/Spacer'

const Home=()=>{
    return (
        <ThemedView style={styles.container}>
            <ThemedLogo />
            <Spacer height={20}/>
            <ThemedText style={styles.title} title={true}>hello1</ThemedText>

            <Spacer/>
            <ThemedText style={{marginTop:30,marginBottom:30}}>
                hello2
            </ThemedText>
             <Spacer/>

            <Link href="/login" style={styles.link}><ThemedText>login</ThemedText></Link>
            <Link href="/register" style={styles.link}><ThemedText>register</ThemedText></Link>
            <Link href="/profile" style={styles.link}><ThemedText>Profile page</ThemedText></Link>

            
        </ThemedView>

    )
}
export default Home
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
    }
}) //object of css
//to use styl from multiple sources ,style={[styles.title,{color:'Purple'}]}
//view==div