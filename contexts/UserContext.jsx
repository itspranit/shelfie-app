import { createContext,useState } from "react";
import {account} from '../lib/appwrite'
import {ID} from "react-native-appwrite"

export const UserContext=createContext()

export function UserProvider ({children}){
 const[user,setUser]=useState(null)

 async function login(email,password){
    try{
        await account.createEmailPasswordSession(email,password)
        const response= await account.get()
        setUser(response)
    }catch(error){
        console.log(error)
    }
 }
 async function register(email,password){
    try{
        await account.create(ID.unique(),email,password)
        await login(email,password)/*we need to manually log the newly registred user in ,as it does not happenn automatically */
    }catch(error){
        console.log(error)
    }
 }
 async function logout(email,password){

 }
 return (
    <UserContext.Provider value={{login,logout,register,user}}>
        {children}
    </UserContext.Provider>
 )
}