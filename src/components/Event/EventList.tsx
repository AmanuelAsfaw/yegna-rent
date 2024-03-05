import { StatusBar } from 'expo-status-bar';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { HorizontalImageWithTextCardComponent } from '..';
import Event from './Event'
import { EventList } from '../../data'

interface PropsType{
  // title: string;
}

export default function App(props: any) {
  return (
    <View style={styles.container}>
      <ScrollView 
      // scrollEventThrottle={16}    
      showsVerticalScrollIndicator
      >
        {EventList.map((e) => <Event navigation={props.navigation} event={e}/>)}        
      </ScrollView>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    // borderWidth: 1,
    // borderColor: '#111',
    width: Dimensions.get('screen').width,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  haederText: {
    fontSize: 20,
    fontWeight: '700',
    paddingHorizontal: 10
  }
});
