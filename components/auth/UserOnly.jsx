import { useRouter } from "expo-router";
import { useUser } from "../../hooks/useUser";
import { useEffect } from "react";
import { Text } from "react-native"; // Assuming Text is imported if it's used


import ThemedLoader from '../../components/ThemedLoader'

const UserOnly = ({ children }) => {
    const { user, authChecked } = useUser();
    const router = useRouter();

    useEffect(() => {
        // If authentication check is complete AND user is null, redirect to login
        if (authChecked && user === null) {
            router.replace('/login');
        }
    }, [user, authChecked]);//dependency array-if these two values are changes the functions runs again

    // Show loading state until authentication check is complete, 
    // or if the user is undefined (still loading)
    if (!authChecked || user === undefined) { 
        return (
            <ThemedLoader/>
        )
    }
    
    // If the check is complete and the user is found, render the children
    return children;
}

export default UserOnly;