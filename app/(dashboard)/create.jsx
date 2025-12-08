import { StyleSheet, Text, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { useBooks } from "../../hooks/useBooks"
import { useRouter } from "expo-router"
import { useState } from 'react'

// themed components
import ThemedView from "../../components/ThemedView"
import ThemedText from "../../components/ThemedText"
import ThemedTextInput from "../../components/ThemedTextInput"
import ThemedButton from "../../components/ThemedButton"
import Spacer from "../../components/Spacer"

const Create = () => {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [description, setDescription] = useState("")
    const [loading, setLoading] = useState(false)

    const { createBook } = useBooks()
    const router = useRouter()

    const handleSubmit= async()=>{
      if(!title.trim()|| !author.trim()||!description.trim()) return

      setLoading(true)

      await createBook({title,author,description})
      //reset fields
      setTitle("")
      setAuthor("")
      setDescription("")

      //redirect
      router.replace('/books')

      //reset loading
      setLoading(false)
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ThemedView style={styles.container}>
                <ThemedText title={true} style={styles.heading}>
                    Add a New Book
                </ThemedText>
                <Spacer />

                <ThemedTextInput
                    style={styles.input}
                    placeholder="Book Title"
                    value={title}
                    onChangeText={setTitle}
                />
                <Spacer />

                <ThemedTextInput
                    style={styles.input}
                    placeholder="Author"
                    value={author}
                    onChangeText={setAuthor}
                />
                <Spacer />

                <ThemedTextInput
                    style={styles.multiline}
                    placeholder="Book Description"
                    value={description}
                    onChangeText={setDescription}
                    multiline={true}
                />
                <Spacer />

                <ThemedButton onPress={handleSubmit} disabled={loading}>
                    <Text style={{ color: '#fff' }}>
                        { loading ? "Saving..." : "Create Book" }
                    </Text>
                </ThemedButton>

            </ThemedView>
        </TouchableWithoutFeedback>
    )
}

export default Create

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        width: "100%"
    },
    multiline: {
        width: "100%",
        minHeight: 120
    }
})