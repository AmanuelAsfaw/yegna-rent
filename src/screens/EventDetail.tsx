import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { EventListComponent } from '../components';
import EventDetail from '../components/Event/EventDetail';
import { EventInterface } from '../data/event.data';
import { TextColor, ThemType } from '../theme';

interface PropsType {
    event: EventInterface | undefined
}
  
export default function EventDetailScreen(props: any) {
    const event = props?.route?.params?.event
    console.log('EventDetail props');
    console.log(props);
    console.log(props?.route?.params?.event);
    return (
        <View style={styles.container}>
        {event && (<EventDetail {...props} navigation={props.navigation} event={event}/>)}
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
