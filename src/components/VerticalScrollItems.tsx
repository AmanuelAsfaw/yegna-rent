import { StatusBar } from 'expo-status-bar';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { EventComponent, HorizontalImageWithTextCardComponent } from '.';
import { EventList } from '../data'

interface PropsType{
  title: string;
  onPressSeeAll: Function;
  navigation: any;
}

export default function VerticalScrollItemsComponent({title, onPressSeeAll, navigation }: PropsType) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>          
        <Text style={styles.haederText}>{title}</Text>
        <TouchableOpacity
          style={styles.buttonSeeAll}
          onPress={() => onPressSeeAll()}>
          <Text style={styles.haederText}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView 
      // scrollEventThrottle={16}    
      showsVerticalScrollIndicator
      >
        {
          EventList.map((e)=> <EventComponent navigation={navigation} event={e}/>)
        }
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
  },
  buttonSeeAll: {

  },
});
