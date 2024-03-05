import { StatusBar } from 'expo-status-bar';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { HorizontalImageWithTextCardComponent } from '..';
import Museum from './Museum'
import { MuseumList } from '../../data'
interface PropsType{
  // title: string;
}

export default function MuseumListComponent(props: any) {
  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>          
        <Text style={styles.haederText}>Museum List</Text>
        <Text style={styles.haederText}>See All</Text>
      </View> */}
      <ScrollView 
      // scrollEventThrottle={16}    
      showsVerticalScrollIndicator
      >
        {MuseumList.map((e) => <Museum navigation={props.navigation}  key={'museum'+e.id.toString()} museum={e}/>)}
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
    paddingVertical:10,
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
