import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { EventInterface } from '../data/event.data';
import { TextColor, ThemType } from '../theme';
import CarDetail from '../components/CarDetail/CarDetail';
import { useEffect } from 'react';

interface PropsType {
    car: EventInterface | undefined
}
  
export default function CarDetailScreen(props: any) {
    const car = props?.route?.params?.car
    console.log('EventDetail props');
    console.log(props);
    console.log(props?.route?.params?.car);
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
        <View style={styles.container}>
        {car && (<CarDetail {...props} navigation={props.navigation} car={car}/>)}
        <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: TextColor[ThemType],
    alignItems: 'center', 
    // justifyContent: 'center',
    // marginTop: 40,
    paddingTop: 10,
  },
});
