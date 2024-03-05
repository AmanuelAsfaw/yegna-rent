import { StatusBar } from 'expo-status-bar';
import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { Ref, SetStateAction, useState } from 'react';
import { EvilIcons, Octicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Dropdown, DropdownRef, Text as TextMagnus } from "react-native-magnus";
import React from 'react';
import { CarList } from '../../data';

export default function HomeComponent() {
    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [cars_list, setCarsList] = useState(CarList.map((item)=>{
        const item_like = item.id%2 == 0? true: false 
        return {
            ...item,
            liked: item_like
        }
    }))
    const onPressFavorite = (id: number) =>{
        const fav_list = cars_list.map((x)=>{
            if (x.id == id)
                return {
                    ...x,
                    liked: !x.liked
                }
            return x
        })
        setCarsList(fav_list)
        
    }
    return (
        <View style={styles.container}>     
        
        <ScrollView style={{width: '100%'}} showsVerticalScrollIndicator={false}>
            <Text style={{paddingLeft: 10, fontSize: 18, fontWeight: '600'}}>Available Near You</Text>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 10,          
                height: 30,  
                }}>
                <Text style={{flex: 1}}>with driver</Text>
                <Switch style={{flex: 1}}
                    trackColor={{false: '#767577', true: 'green'}}
                    thumbColor={isEnabled ? '#cefad0' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 10, 
                }}>
                <FlatList numColumns={2} data={cars_list} renderItem={(item)=>{
                    return(
                        <View style={[styles.shadow,{width: 150, marginLeft: 10, marginBottom:7, padding: 5, borderRadius: 8, position: 'relative'}]}>
                            <TouchableOpacity style={styles.button} onPress={() => onPressFavorite(item.item.id)}>
                                <AntDesign name={item.item.liked ?'hearto': 'heart'} size={24} color={item.item.liked ?'green': 'green'}/>
                            </TouchableOpacity>
                            <Image style={{width: 140, height: 100}} source={item.item.image}/>
                            <Text style={{ fontWeight: '500'}}>{item.item.name}</Text>
                            <View style={{flexDirection: 'row'}}>
                                <AntDesign name="star" size={12} color="#ffa534" />
                                <AntDesign name="star" size={12} color="#ffa534" />
                                <AntDesign name="star" size={12} color="#ffa534" />
                                <AntDesign name="star" size={12} color="#ffa534" />
                                <AntDesign name="star" size={12} color="#ffa534" />
                            </View>
                            <Text style={{color: 'gray', fontWeight: '400'}}>5 seater</Text>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{color: 'green', fontWeight: '500'}}>$220</Text>
                                <Text style={{ fontWeight: '500' }}>/days</Text>
                            </View>
                        </View>
                    )
                }}/>
            </View>
        </ScrollView>   
            
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
    marginTop: 40,
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
