import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ParkInterface } from '../data/park.data';
import MuseumDetail from '../components/Museum/MuseumDetail';

interface PropsType {
  museum: ParkInterface | undefined
}
  
export default function MuseumDetailScreen(props: any) {
    const museum = props?.route?.params?.museum
    console.log('EventDetail props');
    console.log(props);
    console.log(props?.route?.params?.museum);
    return (
        <View style={styles.container}>
        {museum && (<MuseumDetail {...props} navigation={props.navigation} museum={museum}/>)}
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
