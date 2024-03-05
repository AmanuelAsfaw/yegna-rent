import { StatusBar } from 'expo-status-bar';
import { Dimensions, ScrollView, StyleSheet, Text, Button, View, TouchableOpacity } from 'react-native';
import { ImageWithTextCardComponent } from '.';
import data from './home.util'
import Museum from './Museum/Museum';
import Park from './Park/Park';

interface PropsType{
  title: string;
  onPressSeeAll: Function;
}

export default function App({title, onPressSeeAll}: PropsType) {
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
      scrollEventThrottle={16}
      showsHorizontalScrollIndicator={false}
      horizontal
      >
        {data().map(e => {
          return <ImageWithTextCardComponent title={e.name} image={e.image}/>
          console.log(e);
          
          if(e.type === 'museum'){
            return <Museum museum={e}/>
          }
          else if (e.type === 'park'){
            return <Park park={e}/>
          }
        })}
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

  }
});
