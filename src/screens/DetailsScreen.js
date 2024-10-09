import React from 'react';
import { SafeAreaView, StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';

const DetailsScreen = ({ route }) => {
    const { item: movie } = route.params; // Ensure you get the movie from params

    return (
        <SafeAreaView style={styles.container}>
            {/* Backdrop Image */}
            <Image
                source={{ uri: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` }}
                style={styles.backdrop}
                resizeMode="cover"
            />
            {/* Black Overlay for Backdrop Image */}
            <View style={styles.blackOverlay} />

            <View style={styles.content}>
                {/* Poster Image on the Left */}
                <Image
                    source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                    style={styles.poster}
                    resizeMode="cover"
                />

                {/* Info Container for Title and Overview */}
                <View style={styles.infoContainer}>
                    <Text style={styles.title}>{movie.title}</Text>
                    <Text style={styles.overview}>{movie.overview}</Text>
                    <View style={styles.buttons}>
                        <TouchableOpacity style={styles.button} onPress={() => { /* Handle star action */ }}>
                            <Text>⭐</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => { /* Handle thumbs up action */ }}>
                            <Text>👍</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => { /* Handle share action */ }}>
                            <Text>🔗</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

// Add styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backdrop: {
        width: '100%',
        height: 300, // Height of the backdrop
        position: 'absolute',
        top: 0,
        left: 0,
    },
    blackOverlay: {
        position: 'absolute',
        top: 150, // Adjust to cover the bottom half of the backdrop image
        left: 0,
        right: 0,
        height: '50%', // Cover the bottom half of the backdrop
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Black with some transparency
    },
    content: {
        flexDirection: 'row',
        padding: 16,
        position: 'absolute', // Make content absolute to overlap with the backdrop
        top: 200, // Position it just below the backdrop image
        left: 16,
        right: 16,
        alignItems: 'center',
    },
    poster: {
        width: 100,
        height: 150,
        borderRadius: 10,
        borderWidth: 2, // Optional: border around the poster
        borderColor: '#fff', // Optional: color of the border
        marginRight: 16,
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#fff', // Title color for better visibility
    },
    overview: {
        fontSize: 16,
        marginBottom: 10,
        color: '#fff', // Overview color for better visibility
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%', // Adjust width as needed
    },
    button: {
        padding: 10,
    },
});

export default DetailsScreen;
