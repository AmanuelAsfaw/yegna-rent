import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import CustomerSupportComponent from '../../components/Profile/CustomerSupport/CustomerSupport';
import MyBookingComponent from '../../components/Profile/MyBooking/MyBooking';
import { useEffect } from 'react';

export default function MyBookingScreen(props: any) {
    const { navigation } = props;
    
    useEffect(() => {
      navigation.getParent()?.setOptions({
        tabBarStyle: { display: 'none' }
      });
      return () => {
        navigation.getParent()?.setOptions({ tabBarStyle: undefined });
      };
    }, [navigation]);
  return (
    <MyBookingComponent/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    // marginTop: 40,
    paddingTop: 10,
  },
});
