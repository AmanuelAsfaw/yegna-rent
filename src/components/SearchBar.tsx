import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { useState } from 'react';

export default function App() {
    const [searchText, setSearchText] = useState('');
  return (
    <View style={styles.searchBar}>
        <TextInput
            placeholder='Find Art here'
            // value={searchText}
            style={styles.searchBarInput}
            onChangeText={(text) => setSearchText(text)}
        />        
        <EvilIcons name="search" size={28} color="black" onPress={()=> console.log(searchText)}/>
    </View>
  );
}

const styles = StyleSheet.create({
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: Dimensions.get('screen').width/1.2,

        // Shadow Style
        // borderWidth:1,
        shadowColor:'#000',
        shadowOpacity: 0.58,
        shadowRadius:22,
        shadowOffset: {
            height: 15,
            width: 15
        },
        elevation: 24,

        paddingVertical: 0,
        borderRadius:25,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        backgroundColor: 'lightgray'
  },
  searchBarInput: {
    width: Dimensions.get('screen').width/1.2 - 50,
    height: 40,
    // zIndex: 1000,
  }
});
