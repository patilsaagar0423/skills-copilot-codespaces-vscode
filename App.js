import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import FavouriteScreen from './src/screens/FavouriteScreen';
import SearchScreen from './src/screens/SearchScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import DetailsScreen from './src/screens/DetailsScreen';

// Create stack and tab navigators
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }} 
      />
      <Tab.Screen 
        name="Favourite" 
        component={FavouriteScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }} 
      />
      <Tab.Screen 
        name="Search" 
        component={SearchScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" color={color} size={size} />
          ),
        }} 
      />
      <Tab.Screen 
        name="Settings" 
        component={SettingsScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="cog" color={color} size={size} />
          ),
        }} 
      />
    </Tab.Navigator>
  );
};

// Create App
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Main" 
          component={MainTabNavigator} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Details" 
          component={DetailsScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App; // Ensure you export the App component correctly
