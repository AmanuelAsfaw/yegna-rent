import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import MyVehiclesComponent from '../components/MyVehicles/MyVehicles';
import { useEffect } from 'react';

export default function MyVehiclesScreen(props: any) {
    const { navigation } = props;
    
    return (
        <MyVehiclesComponent  {...props} navigation={navigation}/>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 40,
    paddingTop: 10,
  },
});
