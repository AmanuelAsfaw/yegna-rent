import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Switch, Text, View } from 'react-native';

import { SelectList } from 'react-native-dropdown-select-list';
import { SetStateAction, useState } from 'react';
import SettingsItemComponent from './SettingsItem';

export default function App() {
  const [languageSelected, setLanguageSelected] = useState("");
  const [darkTheme, setDarkTheme] = useState(false);

    const data = [
        {key:'1', value:'Amharic', disabled:true},
        {key:'2', value:'English'},
        {key:'3', value:'Franch'},
        {key:'4', value:'Dutch'},
        {key:'5', value:'Afan-Oromo'},
        {key:'6', value:'Somali'},
        {key:'7', value:'Tigrinya'},
    ]
    const SelecteListInput =()=>
      (<SelectList 
          setSelected={(val: string) => setLanguageSelected(val)} 
          data={data} 
          save="value"
          defaultOption={{ key:'1', value:'Languages' }}
          boxStyles={{
              borderWidth: 0,
              shadowColor:'#000',
              shadowOpacity: 0.58,
              shadowRadius:22,
              shadowOffset: {
                  height: 15,
                  width: 15
              },
              elevation: 24,
              backgroundColor: 'white'
          }}
      />)

    const SelecteTheme = () => (
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderRadius: 10,
        shadowColor:'#000',
        shadowOpacity: 0.58,
        shadowRadius:22,
        shadowOffset: {
            height: 15,
            width: 15
        },
        elevation: 24,
        backgroundColor: 'white'
      }}>
        <Text>Dark theme</Text>
        <Switch 
          value={darkTheme}
          onValueChange={(e) => setDarkTheme(e)}
        />
      </View>
    )

  return (
    <View style={styles.container}>
        <SettingsItemComponent title="Language" inputChild={SelecteListInput()}/>
        <SettingsItemComponent title="Theme" inputChild={SelecteTheme()}/>
      <StatusBar style="auto"/>
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
    borderWidth:.5,
    width: Dimensions.get('screen').width/1.1,
    // height: 70,
    borderRadius:8,
    padding: 5,
  }
});
