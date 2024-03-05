import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import FavoritesComponent from '../../components/Profile/Favorites/Favorites';
import { useEffect } from 'react';

export default function FavoritesScreen(props: any) {
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
    <FavoritesComponent {...props} navigation={navigation}/>
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
