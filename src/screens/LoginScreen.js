import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, Button } from 'react-native';

// create LoginScreen component
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

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
    };

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

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>NETFLIX</Text>
            <Text style={styles.subtitle}>Watch TV shows & movies. Anywhere. Anytime.</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    placeholderTextColor="#888"
                    value={email}
                    onChangeText={setEmail}
                />
                <View style={styles.inputLine} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#888"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                />
                <View style={styles.inputLine} />
            </View>
            {error ? <Text style={styles.error}>{error}</Text> : null}
            <Text style={styles.forgotPassword}>Forgot password?</Text>
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate("SignUp")}>
                <Text style={styles.signUpButtonText}>Sign Up</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 48,
        color: 'red',
        fontWeight: 'bold',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#ffffff',
        marginBottom: 32,
    },
    inputContainer: {
        width: '80%',
        marginBottom: 16,
    },
    input: {
        height: 40,
        color: '#ffffff',
        fontSize: 16,
    },
    inputLine: {
        height: 1,
        backgroundColor: 'red',
    },
    error: {
        color: 'red',
        marginBottom: 12,
    },
    forgotPassword: {
        color: '#ffffff',
        fontSize: 14,
        marginTop: 8,
        marginBottom: 32,
    },
    loginButton: {
        width: '80%',
        backgroundColor: 'red',
        paddingVertical: 12,
        alignItems: 'center',
        borderRadius: 4,
        marginBottom: 16,
    },
    loginButtonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    signUpButton: {
        width: '80%',
        backgroundColor: 'gray',
        paddingVertical: 12,
        alignItems: 'center',
        borderRadius: 4,
    },
    signUpButtonText: {
        color: '#ffffff',
        fontSize: 18,
    },
});

export default LoginScreen;
