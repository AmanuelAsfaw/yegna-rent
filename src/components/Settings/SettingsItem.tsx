import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import { SelectList } from 'react-native-dropdown-select-list';
import { SetStateAction, useState } from 'react';

interface PropsType {
  title: string;
  inputChild: any;
}
export default function App({ title, inputChild }:PropsType) {
    const [selected, setSelected] = useState("");

    const data = [
        {key:'1', value:'Amharic', disabled:true},
        {key:'2', value:'English'},
        {key:'3', value:'Oromic'},
        {key:'4', value:'Tigiray', disabled:true},
        {key:'5', value:'French'},
        {key:'6', value:'Russian'},
        {key:'7', value:'Chinies'},
    ]
  
  return (
      <View style={styles.card}>
        <View style={{
          paddingHorizontal: 10,
          paddingVertical: 5,
        }}>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
          }}>{title}</Text>
        </View>
        {inputChild}
      </View>
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
  card: {
    // borderWidth:.5,
    width: Dimensions.get('screen').width/1.1,
    // height: 70,
    borderRadius:8,
    padding: 5,
    shadowColor:'#000',
    shadowOpacity: 0.58,
    shadowRadius:22,
    shadowOffset: {
        height: 15,
        width: 15
    },
    elevation: 24,
    backgroundColor: 'white',
    marginBottom: 10,
  }
});
