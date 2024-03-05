import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ParkDetail from '../components/Park/ParkDetail';
import { ParkInterface } from '../data/park.data';

interface PropsType {
  park: ParkInterface | undefined
}
  
export default function ParkDetailScreen(props: any) {
    const park = props?.route?.params?.park
    console.log('EventDetail props');
    console.log(props);
    console.log(props?.route?.params?.park);
    return (
        <View style={styles.container}>
        {park && (<ParkDetail {...props} navigation={props.navigation} park={park}/>)}
        <StatusBar style="auto" />
        </View>
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
