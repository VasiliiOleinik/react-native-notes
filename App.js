import React from 'react';
// import { } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Container } from 'native-base';

import Todo from './src/todo/Todo';
import { Weather } from './src/weather/Weather';
import { Music } from './src/music/Music';


export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <Container >
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Todo') {
                iconName = focused
                  ? 'ios-list-box'
                  : 'ios-list';
              } else if (route.name === 'Weather') {
                iconName = 'ios-leaf';
              } else if (route.name === 'Music') {
                iconName = 'ios-musical-notes';
              }
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Todo" component={Todo} />
          <Tab.Screen name="Music" component={Music} />
          <Tab.Screen name="Weather" component={Weather} />
        </Tab.Navigator>
      </NavigationContainer>
    </Container >
  );
};
