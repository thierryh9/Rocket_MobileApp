  
import React from 'react';
import StartUpScreen from './screens/StartUpScreen';
import HomeScreen from './screens/HomeScreen';
import ElevatorScreen from './screens/ElevatorScreen';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="StartUpScreen"
          component={StartUpScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: "List of elevators" }}
        />
        <Stack.Screen name="ElevatorScreen" component={ElevatorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
