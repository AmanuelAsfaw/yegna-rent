import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import ProfileComponent from '../components/Profile/Profile';

export default function ProfileScreen(props: any) {
  return (
    <ProfileComponent  {...props} navigation={props.navigation}/>
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
