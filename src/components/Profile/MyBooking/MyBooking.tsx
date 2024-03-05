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

export default function MyBookingComponent() {
    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [cars_list, setCarsList] = useState(CarList.map((item)=>{
        const item_like = item.id%2 == 0? true: false 
        return {
            ...item,
            liked: item_like
        }
    }))
    const BookItemComp = () =>{
        
        return (
            <View style={[styles.shadow,{alignItems: 'flex-start', marginHorizontal: 10, padding: 10, borderRadius: 5, marginVertical: 3}]}>
                <View style={{flexDirection: 'row'}}>
                    <Image source={require('../../../../assets/car/kia.jpg')} style={{width: 150,maxHeight: 100, paddingLeft: 10, resizeMode: 'contain' }}/>
                    <View style={{ justifyContent: 'center', paddingLeft: 10 }}>
                        <Text style={{fontWeight: '500'}}>Mercedes-Benz</Text>
                        <Text style={{color: 'gray', fontWeight: '500'}}>Booking id CZ2215</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Ionicons name="location-sharp" size={24} color="green" />
                    <Text>2464 Royal Ln. Mesa, New Jersey 45463</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{marginHorizontal: 5, flex: 2}}>
                        <Text style={{color: 'gray', fontWeight: '500'}}>Trip Start</Text>
                        <Text>28 june 2022, 5:30pm</Text>
                    </View>
                    <View style={{marginHorizontal: 5, flex: 2}}>
                        <Text style={{color: 'gray', fontWeight: '500'}}>Trip end</Text>
                        <Text>30 june 2022, 6:30pm</Text>
                    </View>
                    <View style={{marginHorizontal: 5}}>
                        <Text style={{color: 'gray', fontWeight: '500'}}>Paid</Text>
                        <Text>$660</Text>
                    </View>
                </View>
                
            </View>)
        
    }

    return (
        <View style={styles.container}>     
            {BookItemComp()} 
            {BookItemComp()}
            
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    // justifyContent: 'center',
    // marginTop: 40,
    paddingTop: 10,
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
