import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigComp from './StackNavigation';
import TabNavigation from './TabNavigation';

export default function App() {
  return (
    <NavigationContainer>
        {/* <StackNavigComp/> */}
        <TabNavigation/>
    </NavigationContainer>
  );
}
