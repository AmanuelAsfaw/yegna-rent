import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import CustomerSupportComponent from '../../components/Profile/CustomerSupport/CustomerSupport';

export default function CustomerSupportScreen() {
  return (
    <CustomerSupportComponent/>
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
