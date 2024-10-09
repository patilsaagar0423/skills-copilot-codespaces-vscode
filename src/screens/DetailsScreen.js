import React from 'react';
import { SafeAreaView, StyleSheet, Text, Image, View, TouchableOpacity, ScrollView } from 'react-native';

const DetailsScreen = ({ route }) => {
    const { item: movie } = route.params;

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

                {/* Info Container for Title, Overview, and Ratings */}
                <View style={styles.infoContainer}>
                    <Text style={styles.rating}>
                        {movie.vote_average}/10{" "}
                        <Text style={styles.voteCount}>({movie.vote_count})</Text>
                    </Text>
                    <Text style={styles.episode}>The 48 - S2 E1</Text>
                    <Text style={styles.description}>
                        While Clarke struggles to make sense of her bizarre surroundings, Lincoln risks his life to save Octavia, and Kane establishes his authority.
                    </Text>
                    {/* Interaction Buttons */}
                    <View style={styles.buttons}>
                        <TouchableOpacity style={styles.iconButton}>
                            <Text style={styles.iconText}>⭐</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Text style={styles.iconText}>👍</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Text style={styles.iconText}>🔗</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* Play Button */}
            <TouchableOpacity style={styles.playButton}>
                <Text style={styles.playButtonText}>PLAY</Text>
            </TouchableOpacity>

            {/* Series Information Section */}
            <ScrollView style={styles.seriesInfo} contentContainerStyle={{ paddingBottom: 40 }}>
                <Text style={styles.seriesTitle}>The 100</Text>
                <Text style={styles.seriesDescription}>
                    The 100 is an American post-apocalyptic science fiction drama television series that premiered on March 19, 2014, on The CW and ended on September 30, 2020. The series, developed by Jason Rothenberg, is loosely based on the novel series of the same name by Kass Morgan.
                </Text>
                
                {/* Cast Section */}
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.castList}>
                    {/* Example Cast Images */}
                    {Array(10).fill(0).map((_, index) => (
                        <Image
                            key={index}
                            source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }}
                            style={styles.castImage}
                        />
                    ))}
                </ScrollView>

                {/* Season Selector */}
                <View style={styles.seasonSelector}>
                    {['Season 1', 'Season 2', 'Season 3', 'Season 4', 'Season 5'].map((season, index) => (
                        <TouchableOpacity key={index}>
                            <Text style={[styles.seasonText, index === 1 ? styles.activeSeason : null]}>
                                {season}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

// Adjusted styles to fix overlapping
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    backdrop: {
        width: '100%',
        height: 300, // Adjust height if needed to give more space
        position: 'absolute',
        top: 0,
        left: 0,
    },
    blackOverlay: {
        position: 'absolute',
        top: 150, // Adjust to cover the bottom half of the backdrop image
        left: 0,
        right: 0,
        height: '50%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    content: {
        flexDirection: 'row',
        padding: 16,
        position: 'absolute',
        top: 160, // Moved down to avoid overlap with backdrop
        left: 16,
        right: 16,
        alignItems: 'center',
    },
    poster: {
        width: 100,
        height: 150,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#fff',
        marginRight: 16,
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    rating: {
        fontSize: 16,
        color: '#fff',
        marginBottom: 4,
    },
    voteCount: {
        color: '#bbb',
    },
    episode: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 8,
    },
    description: {
        fontSize: 14,
        color: '#ddd',
        marginBottom: 12,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
    },
    iconButton: {
        padding: 10,
    },
    iconText: {
        fontSize: 18,
        color: '#fff',
    },
    playButton: {
        width: '80%',
        backgroundColor: 'red',
        paddingVertical: 12,
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 4,
        marginVertical: 16,
        position: 'absolute',
        top: 340, // Positioned below the content section to avoid overlap
    },
    playButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    seriesInfo: {
        marginTop: 450, // Increased margin to prevent overlap with the play button
        paddingHorizontal: 16,
    },
    seriesTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 8,
    },
    seriesDescription: {
        fontSize: 14,
        color: '#ccc',
        marginBottom: 16,
    },
    castList: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    castImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 12,
    },
    seasonSelector: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 16,
        borderTopColor: '#444',
        borderTopWidth: 1,
    },
    seasonText: {
        color: '#888',
    },
    activeSeason: {
        color: 'red',
        borderBottomColor: 'red',
        borderBottomWidth: 2,
    },
});

export default DetailsScreen;
