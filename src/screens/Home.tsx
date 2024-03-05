import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { HorizontalScrollItemComponent, SearchBarComponent, VerticalScrollItemComponent } from '../components';
import HomeComponent from '../components/Home/Home';
interface PropsType {
  navigation: any;
}
export default function HomeScreen(props:  any) {
  const navigation = props.navigation
  const onPressSeeAll = () => {
    navigation.navigate('Museum')
  }

  const onPressSeeAllEvent = () => {
    navigation.navigate('Event')
  }
  
  return (
    <HomeComponent/>
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
