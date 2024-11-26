import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import GalleryList from './components/GalleryList';
import PhotoScreen from './components/PhotoScreen';

const Stack = createStackNavigator(); 
export default function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="GalleryList"> 
        <Stack.Screen name="GalleryList" component={GalleryList} options={{ title: 'Gallery' }} />
        <Stack.Screen name="PhotoScreen" component={PhotoScreen} options={{ title: 'Photo' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}