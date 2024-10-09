import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  FlatList,
  View,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation(); // Get navigation prop
  const [popularMovies, setPopularMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingSeries, setTrendingSeries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch movie and series data
  useEffect(() => {
    const fetchPopularMovies = fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=e79996876b36e8dfd62075b6c25533be"
    )
      .then((response) => response.json())
      .then((data) => setPopularMovies(data.results));

    const fetchTrendingMovies = fetch(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=e79996876b36e8dfd62075b6c25533be"
    )
      .then((response) => response.json())
      .then((data) => setTrendingMovies(data.results));

    const fetchTrendingSeries = fetch(
      "https://api.themoviedb.org/3/trending/tv/week?api_key=e79996876b36e8dfd62075b6c25533be"
    )
      .then((response) => response.json())
      .then((data) => setTrendingSeries(data.results));

    Promise.all([fetchPopularMovies, fetchTrendingMovies, fetchTrendingSeries])
      .then(() => setLoading(false))
      .catch(() => {
        setError("Error loading data");
        setLoading(false);
      });
  }, []);

  // Loading and error handling
  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  // Render component
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Popular Movies</Text>
        <FlatList
          data={popularMovies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => navigation.navigate('Details', { item })} // Navigate to Details screen
            >
              <Image
                source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
                style={styles.image}
                resizeMode="cover"
              />
            </TouchableOpacity>
          )}
          horizontal
        />

        <Text style={styles.title}>Trending Movies</Text>
        <FlatList
          data={trendingMovies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => navigation.navigate('Details', { item })} // Navigate to Details screen
            >
              <Image
                source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
                style={styles.image}
                resizeMode="cover"
              />
            </TouchableOpacity>
          )}
          horizontal
        />

        <Text style={styles.title}>Trending Series</Text>
        <FlatList
          data={trendingSeries}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => navigation.navigate('Details', { item })} // Navigate to Details screen
            >
              <Image
                source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
                style={styles.image}
                resizeMode="cover"
              />
            </TouchableOpacity>
          )}
          horizontal
        />
      </ScrollView>
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 16,
    textAlign: "left",
  },
  item: {
    marginHorizontal: 8,
  },
  image: {
    width: 150,
    height: 225,
    borderRadius: 10,
  },
});

export default HomeScreen;
