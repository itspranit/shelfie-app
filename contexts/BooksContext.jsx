import { createContext, useEffect, useState } from "react"
import { databases,client } from "../lib/appwrite"
import { ID, Role } from "react-native-appwrite"
import { useUser } from "../hooks/useUser"

const DATABASE_ID="693667b5002434bf3168"
const COLLECTION_ID="books"
export const BooksContext =createContext()

export function BooksProvider({children}){
    const [books,setBooks]=useState([])
    const {user} = useUser()

    async function fetchBooks(){
        try{
            const response = await databases.listDocuments(
                DATABASE_ID,
                COLLECTION_ID,
                [
                    Query.equal('userId',user.$id)
                ]
            )

            setBooks(response.documents)
            console.log(response.documents)
        }
        catch(error){
            console.error(error.message)
        }
    }
    async function fetchBookById(id){
        try{

        }
        catch(error){
            console.error(error.message)
        }

    }
    async function createBook(data){
        try{
            const newBook = await databases.createDocument(
                DATABASE_ID,
                COLLECTION_ID,
                ID.unique(),
                {...data,userId:user.$id},
                [
                    Permission.read(Role.user(user.$id)),
                    Permission.update(Role.user(user.$id)),
                    Permission.delete(Role.user(user.$id))
                ]
            )
        }
        catch(error){
            console.error(error.message)
        }

    }
    async function deleteBook(id){
        try{

        }
        catch(error){
            console.error(error.message)
        }

    }
    useEffect(()=>{
        let unsubscribe
        const channel=`databases.${DATABASE_ID}.collections.${COLLECTION_ID}.documents`

        if(user){
            fetchBooks()

            unsubscribe=client.subscribe(channel,(response)=> {
                const {payload,events}=response

                if(events[0].includes('create')){
                    setBooks((prevBooks)=>[...prevBooks,payload])
                }
            })
        }
        else{
            setBooks([])
        }
        return ()=>{
            if(unsubscribe) unsubscribe()
        }
    },[user])

    return (
        <BooksContext.Provider value={{books,fetchBookById,createBook,deleteBook,fetchBooks}}>
            {children}
        </BooksContext.Provider>
    )
}