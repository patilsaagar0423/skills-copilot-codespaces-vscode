// create settings screen
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

const SettingsScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Settings Screen</Text>
        <Text style={styles.subtitle}>
            Manage your account settings
        </Text>
        </SafeAreaView>
    );
    }


// Add styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 18,
        color: 'gray',
    },
});

export default SettingsScreen;