import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import EditProfileComponent from '../../components/Profile/EditProfile/EditProfile';
import { useEffect } from 'react';

export default function EditProfileScreen(props: any) {
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
    <EditProfileComponent/>
  );
}

EditProfileScreen.navigationOptions = {
    tabBarVisible: false,
};

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
