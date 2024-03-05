import { StatusBar } from 'expo-status-bar';
import { Dimensions, FlatList, Image, Linking, ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { Ref, SetStateAction, useState } from 'react';
import { EvilIcons, Fontisto, Octicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Dropdown, DropdownRef, Text as TextMagnus } from "react-native-magnus";
import React from 'react';
import { CarList } from '../../../data';

export default function CustomerSupportComponent() {
    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [cars_list, setCarsList] = useState(CarList.map((item)=>{
        const item_like = item.id%2 == 0? true: false 
        return {
            ...item,
            liked: item_like
        }
    }))
    const ContactComp = (name: string, info: string, icon: any,url: string) =>{
        console.log(url);
        
        return (
            <TouchableOpacity style={[styles.shadow, {padding: 15, borderRadius: 8, flexDirection: 'row', width: Dimensions.get('screen').width/1.1 - 10, alignItems: 'center', marginVertical: 5}]}
            onPress={() => {
                if (url)
                    Linking.openURL("https://t.me/N29sm")
            }}
            >
                {icon}
                <View style={{flexDirection:'column'}}>
                <Text style={{paddingLeft: 20, fontWeight: '600'}}>{name}</Text>
                <Text style={{paddingLeft: 20, color: 'gray'}}>{info}</Text>
                </View>
                
            </TouchableOpacity>)
        
    }

    return (
        <View style={styles.container}>     
            <View style={{alignItems: 'center', marginBottom: 30}}>
                <View>
                <AntDesign name="customerservice" size={114} color="green" style={{ alignContent: 'center', alignItems: 'center', justifyContent: 'center', width: 120}}/>
                </View>
                
                <Text style={{textAlign: 'center', alignSelf: 'center', fontWeight: '900', fontSize: 25}}>How can we help you?</Text>
            </View>
            {ContactComp('Phone Number', '(704) 555-0127', <Feather name="phone" size={24} color="green" style={[ styles.shadow,{borderWidth: 0, padding: 8, borderRadius: 25}]}/>, '')}
            {ContactComp('Telegram', '@yegnarent', <FontAwesome5 name="telegram-plane" size={24} color="green" style={[ styles.shadow,{borderWidth: 0, padding: 8, paddingHorizontal: 10, borderRadius: 22}]} />, 'https://t.me/ataeedt')}
            {ContactComp('Email', 'yegnarent@gmail.com', <Fontisto name="email" size={24}color="green" style={[ styles.shadow,{borderWidth: 0, padding: 8, borderRadius: 25}]}/>, '')}
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
    // marginTop: 40,
    paddingTop: 40,
    paddingHorizontal: 5,

  },
  card: {
    borderWidth:.5,
    width: Dimensions.get('screen').width/1.1,
    // height: 70,
    borderRadius:8,
    padding: 5,
  },
  image: {
    height: 100,
    width: 100,
    resizeMode: 'cover',
    borderRadius: 50,
    backgroundColor: 'red'
  },
  searchBarInput: {
    width: Dimensions.get('screen').width/1.2 - 50,
    height: 40,
    // zIndex: 1000,
    color: 'gray'
  },
  shadow: {
    shadowColor:'green',
    shadowOpacity: 0.58,
    shadowRadius:22,
    shadowOffset: {
        height: 15,
        width: 15
    },
    elevation: 10,
    backgroundColor: 'white',
    marginVertical: 1.5,
  },
  button: {
    position: 'absolute',
    top: 7, // Adjust this value to place the button where you want
    right: 7, // Adjust this value to place the button where you want
    // backgroundColor: 'blue',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingVertical: 2,
    paddingHorizontal: 2,
    zIndex: 1,
    borderRadius:4,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },

});
