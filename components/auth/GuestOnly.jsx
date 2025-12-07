import { useRouter } from "expo-router";
import { useUser } from "../../hooks/useUser";
import { useEffect } from "react";
import { Text } from "react-native"; // Assuming Text is imported if it's used

const GuestOnly = ({ children }) => {
    const { user, authChecked } = useUser();
    const router = useRouter();

    useEffect(() => {
        // If authentication check is complete AND user is NOT null, redirect to profile
        if (authChecked && user !== null) { 
            router.replace('/profile');
        }
    }, [user, authChecked]);

    // Show loading state until authentication check is complete
    if (!authChecked || user === undefined) { 
        return <Text>Loading</Text>;
    }
    
    // If the check is complete and no user is found (i.e., a guest), render the children
    return children;
}

export default GuestOnly;