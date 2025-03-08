import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import CargoListScreen from './screens/CargoListScreen';
import MapScreen from './screens/MapScreen';
import EmergencyScreen from './screens/EmergencyScreen';
import ProfileScreen from './screens/ProfileScreen';
import DeliveryDetailsScreen from './screens/DeliveryDetailsScreen';
import ConfirmationScreen from './screens/ConfirmationScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CargoList" component={CargoListScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="Emergency" component={EmergencyScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="DeliveryDetails" component={DeliveryDetailsScreen} />
        <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
