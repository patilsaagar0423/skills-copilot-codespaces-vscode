import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, Button } from 'react-native';

// create LoginScreen component
const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };
    
    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.*\s).{8,}$/;
        return passwordRegex.test(password);
    }

    const handleLogin = () => {
        if (!validateEmail(email)) {
            setError("Invalid email format");
        } else if (!validatePassword(password)) {
            setError("Invalid password format");
        } else {
            setError("");
            navigation.navigate("Main");
        }
    };

    // want to design NETFLIX login page with email and password input fields with bottom red line and a login button in red  and  NETFLIX at the top of the page and watch TV shows & movies. Anywhere. Anytime as subtitle
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>NETFLIX</Text>
            <Text style={styles.subtitle}>
                Watch TV shows & movies. Anywhere. Anytime.
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />
            {error ? <Text style={styles.error}>{error}</Text> : null}
            <Button title="Login" onPress={handleLogin} />
            <Button title="Sign Up" onPress={() => navigation.navigate("SignUp")} />
        </SafeAreaView>
    );    
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: 16 
    },
    input: { 
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1, 
        width: '80%', 
        marginBottom: 12, 
        paddingHorizontal: 8 
    },
    error: { 
        color: 'red', 
        marginBottom: 12 
    },
    title: { 
        fontSize: 24, 
        marginBottom: 16 
    },
});

export default LoginScreen;
