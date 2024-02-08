import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../pages/home';
import { Ionicons, FontAwesome, MaterialIcons, } from '@expo/vector-icons';
import Trips from '../pages/trips';
import Profile from '../pages/profile';
import Tour from '../pages/tour';

const Tab = createBottomTabNavigator();
const BottomNav = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarActiveTintColor: '#1d5aff',
      tabBarInactiveTintColor: 'grey'
    })}>
      <Tab.Screen name='Home' component={Home} options={{
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="home" size={28} color={color} />
        )
      }} />

      <Tab.Screen name='Trips' component={Trips} options={{
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="flight" size={28} color={color} />
        )
      }} />

      <Tab.Screen name='Tour' component={Tour} options={{
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <FontAwesome name="briefcase" size={24} color={color} />

        )
      }} />

      <Tab.Screen name='Profile' component={Profile} options={{
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <Ionicons name="person" size={24} color={color} />
        )
      }} />

    </Tab.Navigator>
  )
}

export default BottomNav

const styles = StyleSheet.create({})