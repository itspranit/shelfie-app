import { createContext,useState } from "react";

export const UserContext=createContext()

export function UserProvider ({children}){
 const[user,setUser]=useState(null)

 async function login(email,password){

 }
 async function register(email,password){

 }
 async function logout(email,password){

 }
 return (
    <UserContext.Provider value={{login,logout,register,user}}>
        {children}
    </UserContext.Provider>
 )
}