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

export default function SearchComponent() {
    const [languageSelected, setLanguageSelected] = useState("");
    const [darkTheme, setDarkTheme] = useState(false);
    const [searchText, setSearchText] = useState('');

    const recent_list = [
        {name: 'Mercedes-Benz', image: require('../../../assets/car/mercedesbenz.jpg')},
        {name: 'Audi A8 L', image: require('../../../assets/car/audi.jpg')},
        {name: 'Kia Carens', image: require('../../../assets/car/kia.jpg')},
        {name: 'Toyota glanza', image: require('../../../assets/car/toyotaglanza.jpg')},
    ]
    const car_body_type_list = ['Allsss', 'Hatchbacksssssssss', 'compact SUV', 'SUsssssssV','Hatchbacksssssssss', 'compact SUV', 'SUsssssssV','Hatchbacksssssssss', 'compact SUV', 'SUsssssssV', 'sedan', 'MPV', 'Luxury']
    const [car_body_type_list_status, setCarBodyTypeStatus] = useState(
        car_body_type_list.map(e => {
            return false
        }))

    console.log(`../../../assets/museum.jpg`);
    console.log(Math.ceil(['All', 'Hatchback', 'compact SUV', 'SUV', 'sedan', 'MPV', 'Luxury'].length / 3));
    

    const ProfileItem = (name: string, icon_: any) => {
        return (
            <View style={{paddingTop: 20, borderBottomColor: 'red', borderWidth: 0, 
                paddingBottom: 10,
                
                shadowColor:'green',
                shadowOpacity: 0.58,
                shadowRadius:22,
                shadowOffset: {
                    height: 15,
                    width: 15
                },
                elevation: 24,
                backgroundColor: 'white',
                borderRadius: 5,
                marginVertical: 1.5,
            }}>
                <View style={{ display: 'flex', flexDirection: 'row', paddingHorizontal: 10}}>
                    <View style={{ display: 'flex', flexDirection: 'row' , width: '90%'}}>
                        {icon_}
                        <Text style={{paddingLeft: 10}}>{name}</Text>
                    </View>
                    <MaterialIcons style={{width: '10%'}} name="navigate-next" size={24} color="black" />
                </View>
            {/* <View style={{borderColor: 'red', borderWidth: .5}}></View> */}
        </View>
        )
    }
    const dropdownRef : Ref<DropdownRef> | undefined = React.createRef();
    const CarBodyType = () => {
        return(<>            
            <Text style={{marginLeft: 10, fontWeight: '600', marginTop: 10}}>Car Body Type</Text>
            <View style={{paddingBottom: 20}}>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', paddingBottom: 20, paddingLeft: 10}}>
                {car_body_type_list.map((item, index) => {
                    return (<TouchableOpacity style={[styles.shadow,
                        car_body_type_list_status[index] ? styles.selectedItem: {},
                    {padding: 10, borderRadius: 5, marginRight: 10, marginTop: 10}]} onPress={()=> selectItemHandler(index)}>
                        <Text style={{color: car_body_type_list_status[index]?'green':'gray', fontWeight: '500' }}>{item}</Text>
                    </TouchableOpacity>)
                })}
                </View>
            </View>
        </>)
    }
    const PriceComponent = () => {
        return (<>
            <Text style={{marginLeft: 10, fontWeight: '600', marginTop: 10}}>Price</Text>
            <View style={{paddingBottom: 20}}>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', paddingBottom: 20, paddingLeft: 10}}>
                {car_body_type_list.map((item, index) => {
                    return (<TouchableOpacity style={[styles.shadow,
                        car_body_type_list_status[index] ? styles.selectedItem: {},
                    {padding: 10, borderRadius: 5, marginRight: 10, marginTop: 10}]} onPress={()=> selectItemHandler(index)}>
                        <Text style={{color: car_body_type_list_status[index]?'green':'gray', fontWeight: '500' }}>{item}</Text>
                    </TouchableOpacity>)
                })}
                </View>
            </View>
        </>)
    }
    const SeatingCapacityComponent = () => {
        return(<>
            <Text style={{marginLeft: 10, fontWeight: '600', marginTop: 10}}>Seating capacity</Text>
            <View style={{paddingBottom: 20}}>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', paddingBottom: 20, paddingLeft: 10}}>
                {car_body_type_list.map((item, index) => {
                    return (<TouchableOpacity style={[styles.shadow,
                        car_body_type_list_status[index] ? styles.selectedItem: {},
                    {padding: 10, borderRadius: 5, marginRight: 10, marginTop: 10}]} onPress={()=> selectItemHandler(index)}>
                        <Text style={{color: car_body_type_list_status[index]?'green':'gray', fontWeight: '500' }}>{item}</Text>
                    </TouchableOpacity>)
                })}
                </View>
            </View>
        </>)
    }
    const selectItemHandler = (index: number) => {
        const list_ = [...car_body_type_list_status]
        list_[index] = !list_[index]
        setCarBodyTypeStatus(list_)
    }
  return (
    <View style={styles.container}>
        <View style={{ width: '100%', paddingHorizontal: 10,}}>
            <Text style={{fontWeight: 'bold', fontSize: 21  }}>Search</Text>
        </View>
        <View style={{
            flexDirection: 'row',
            // backgroundColor: 'green',
            width: '100%',
            paddingHorizontal: 10,
            display: 'flex',
            paddingTop: 15,
            marginBottom: 5,
            }}>
            <View style={[styles.shadow, {
                flexDirection: 'row', 
                alignItems: 'center',
                borderRadius: 5,

                
                }]}>
            <EvilIcons name="search" size={22} color="gray" onPress={()=> console.log(searchText)}/>
                <TextInput

                    placeholder='Find Art here'
                    // value={searchText}
                    style={styles.searchBarInput}
                    onChangeText={(text) => setSearchText(text)}
                >
                    
                </TextInput>
            </View>
            <TouchableOpacity style={[styles.shadow, {borderRadius: 5, paddingHorizontal: 8,marginLeft: 5, justifyContent: 'center'}]}
                onPress={() => dropdownRef?.current?.open()}>
                <Feather name="filter" size={24} color="green" />
            </TouchableOpacity>
            
        </View>
        <View style={{marginHorizontal: 10, flexDirection: 'row', 
                justifyContent: 'space-between', 
                width: Dimensions.get('screen').width/1.1 - 10}}>
            <Text style={{width: '50%', justifyContent: 'flex-start', alignItems: 'flex-start', fontWeight: '600'}}>Recently Search</Text>
            
            <View style={{width: '50%', alignItems: 'flex-end', justifyContent: 'flex-end'}}><Text style={{color: 'gray', fontWeight: '600'}}>clear all</Text></View>
        </View>
        
        {recent_list.map((item)=>{
            return (
            <TouchableOpacity style={{flexDirection: 'row', paddingTop: 10, paddingLeft: 15, justifyContent: 'flex-start', alignContent: 'center'}}>
                <Image style={{width: 60, height: 40, resizeMode: 'contain'}} source={item.image}/>
                <Text style={{color: 'gray', marginLeft: 10, justifyContent: 'center', alignContent: 'center'}}>{item.name}</Text>
            </TouchableOpacity>)
        })}
        <Text style={{marginLeft: 10, fontWeight: '600', marginTop: 10}}>Car Body Type</Text>
        <ScrollView style={{paddingBottom: 20}}>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', paddingBottom: 20, paddingLeft: 10}}>
            {car_body_type_list.map((item,index) => {
                return (<TouchableOpacity style={[styles.shadow,
                    car_body_type_list_status[index] ? styles.selectedItem: {},
                    ,{
                    padding: 10, borderRadius: 5, marginRight: 10, marginTop: 10 }]} onPress={()=> selectItemHandler(index)}>
                    <Text style={{color: car_body_type_list_status[index]?'green':'gray', fontWeight: '500'}}>{item}</Text>
                </TouchableOpacity>)
            })}
            </View>
        </ScrollView>
        <Dropdown
            ref={dropdownRef}
            title={
                <TextMagnus mx="xl" style={{fontWeight: 'bold', fontSize: 20, alignSelf: 'center'}} pb="md">
                Filter
                </TextMagnus>
            }
            mt="md"
            pb="2xl"
            showSwipeIndicator={true}
            roundedTop="xl">
                <View style={{ paddingLeft: 20, width: Dimensions.get('screen').width/1.001,}}>
                    
                    <ScrollView style={{paddingBottom: 20, marginBottom: 150}}>
                        {CarBodyType()}
                        {PriceComponent()}
                        {SeatingCapacityComponent()}
                        {/* <FlatList data={[CarBodyType(), PriceComponent(), SeatingCapacityComponent()]} renderItem={(item) => {
                            return <>{item}</>
                        }}/> */}
                    </ScrollView>
                    <View style={[ styles.shadow,{position: 'absolute', bottom: 0, left: 0, right:0, marginBottom: 110, flexDirection: 'row', flex: 2}]}>
                        <TouchableOpacity
                            onPress={() => dropdownRef?.current?.close()}
                            style={{flex: 1, alignItems: 'center'}}><Text style={{fontSize: 22, paddingBottom: 10}}>Cancel</Text></TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1, backgroundColor: 'green', alignItems: 'center'}}><Text style={{fontSize: 22, paddingBottom: 10, color: 'white'}}>Apply</Text></TouchableOpacity>
                    </View>
                </View>
            </Dropdown>
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

    shadowColor:'gray',
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
  selectedItem: {
    borderWidth: 1.5,
    borderColor: 'green',                    
  }

});
