// create favourite screen
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

const FavouriteScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Favourite Screen</Text>
        <Text style={styles.subtitle}>
            Your favorite movies and series
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

export default FavouriteScreen;