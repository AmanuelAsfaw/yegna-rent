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

export default function EditProfileComponent() {
    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
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
            <ScrollView style={{width: Dimensions.get('screen').width/1.1}}>
                <View style={{alignItems: 'center', marginBottom: 10}}>
                    <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                        <Image style={ styles.image} source={require('../../../../assets/museum.jpg')} />
                        <TouchableOpacity style={styles.floatButton} onPress={() => console.log('')}>
                            <AntDesign name="camera" size={24} color="white" />
                            <Text style={{color: 'white', marginLeft: 7}}>change</Text>
                        </TouchableOpacity>
                    </View>                
                </View>
                <View style={{width: Dimensions.get('screen').width/1.1 - 10, paddingLeft: 10, paddingVertical: 5}}>
                    <Text style={{fontWeight: '600', marginBottom: 10}}>Name</Text>
                    <TextInput
                        placeholder='Name'
                        // value={searchText}
                        style={[styles.searchBarInput, styles.shadow, {width: Dimensions.get('screen').width/1.1 - 20,}]}
                        onChangeText={(text) => setName(text)}
                        >
                    </TextInput>
                </View>
                <View style={{width: Dimensions.get('screen').width/1.1 - 10, paddingLeft: 10, paddingVertical: 5}}>
                    <Text style={{fontWeight: '600', marginBottom: 10}}>Email Id</Text>
                    <TextInput
                        placeholder='example@gmail.com'
                        // value={searchText}
                        style={[styles.searchBarInput, styles.shadow, {width: Dimensions.get('screen').width/1.1 - 20,}]}
                        onChangeText={(text) => setName(text)}
                        >
                    </TextInput>
                </View>
                <View style={{width: Dimensions.get('screen').width/1.1 - 10, paddingLeft: 10, paddingVertical: 5}}>
                    <Text style={{fontWeight: '600', marginBottom: 10}}>Phone</Text>
                    <TextInput
                        placeholder='(219) 555-0114'
                        // value={searchText}
                        style={[styles.searchBarInput, styles.shadow, {width: Dimensions.get('screen').width/1.1 - 20,}]}
                        onChangeText={(text) => setName(text)}
                        >
                    </TextInput>
                </View>
                <View style={{width: Dimensions.get('screen').width/1.1 - 10, paddingLeft: 10, paddingVertical: 5}}>
                    <Text style={{fontWeight: '600', marginBottom: 10}}>Address</Text>
                    <TextInput
                        placeholder='(219) 555-0114'
                        // value={searchText}
                        multiline = {true}
                        numberOfLines = {4}
                        style={[styles.searchBarInput, styles.shadow, {width: Dimensions.get('screen').width/1.1 - 20, minHeight: 100, marginBottom: 150}]}
                        onChangeText={(text) => setName(text)}
                        >
                    </TextInput>
                </View>
            </ScrollView>
            <TouchableOpacity style={{backgroundColor: 'green', width: Dimensions.get('screen').width/1.001, alignItems: 'center'}}>
                <Text style={{color: 'white', fontSize: 22, paddingVertical: 10}}>Update</Text>
            </TouchableOpacity>
            
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
    height: 150,
    width: 150,
    resizeMode: 'cover',
    borderRadius: 150,
    backgroundColor: 'red',
    marginBottom: 20,
  },
  searchBarInput: {
    width: Dimensions.get('screen').width/1.2 - 50,
    height: 40,
    // zIndex: 1000,
    color: 'gray',
    paddingLeft: 10,
    borderRadius: 5,
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
  floatButton: {
    position: 'absolute',
    bottom: 0, // Adjust this value to place the button where you want
    right: 0, // Adjust this value to place the button where you want
    left: 0, // Adjust this value to place the button where you want
    // backgroundColor: 'blue',
    // backgroundColor: 'rgba(255, 255, 255, 0.3)',
    backgroundColor: 'green',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 2,
    zIndex: 1,
    borderRadius:4,
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 10,

  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },

});
