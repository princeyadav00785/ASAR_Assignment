import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreens';
import SearchScreen from '../screens/SearchScreen';
import SportsScreen from '../screens/SportsScreen';
import PortfolioScreen from '../screens/PortfolioScreen';
import WalletScreen from '../screens/WalletScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
export default function BottomTabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ 
            tabBarIcon: ({ color, size }) => (
              <Icon name="home-outline" color={color} size={size} />
            ),
            headerShown: false
          }}
        />
        <Tab.Screen 
          name="Search" 
          component={SearchScreen} 
          options={{ 
            tabBarIcon: ({ color, size }) => (
              <Icon name="search-outline" color={color} size={size} />
            ),
            headerShown: false
          }}
        />
        <Tab.Screen 
          name="Sports" 
          component={SportsScreen} 
          options={{ 
            tabBarIcon: ({ color, size }) => (
              <Icon name="football-outline" color={color} size={size} />
            ),
            headerShown: false
          }}
        />
        <Tab.Screen 
          name="Portfolio" 
          component={PortfolioScreen} 
          options={{ 
            tabBarIcon: ({ color, size }) => (
              <Icon name="pie-chart-outline" color={color} size={size} />
            ),
            headerShown: false
          }}
        />
        <Tab.Screen 
          name="Wallet" 
          component={WalletScreen} 
          options={{ 
            tabBarIcon: ({ color, size }) => (
              <Icon name="wallet-outline" color={color} size={size} />
            ),
            headerShown: false
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}