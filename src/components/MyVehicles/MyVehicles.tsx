import { StatusBar } from 'expo-status-bar';
import { Alert, Animated, Dimensions, FlatList, Image, Modal, PanResponder, StyleSheet, Switch, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';

import { SetStateAction, useState } from 'react';
import { FontAwesome, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { SwipeListView } from 'react-native-swipe-list-view';
import { CarList } from '../../data';
import { CarInterface } from '../../data/car.data';
import { SelectList } from 'react-native-dropdown-select-list';

export default function MyVehiclesComponent(props: any) {
    const { navigation }: { navigation: any } = props;
    const [languageSelected, setLanguageSelected] = useState("");
    const [darkTheme, setDarkTheme] = useState(false);
    const [visibleModal, setVisibleModal] = useState(false);
    const [model, setModel] = useState('');
    const [transmission, setTransmission] = useState('');
    const [fuelType, setFuelType] = useState('');
    const [hasLicensePlate, setHasLicensePlate] = useState(true);
    const [step, setStep] = useState(1);
    const [listData, setListData] = useState(
        CarList.map((car, index)=> ({
            key: `${index}`,
            ...car,
            title: car.name,
            details: car.description,
            image: car.image,
        }))
    );

    const locationData = [
        {key:'1', value:'Addis Ababa'},
        {key:'2', value:'Adama'},
        {key:'2', value:'Bahir Dar'},
        {key:'3', value:'Bishoftu'},
        {key:'3', value:'Dessie'},
        {key:'4', value:'Dire Dawa - Harar'},
        {key:'5', value:'Gonder'},
        {key:'6', value:'Harar'},
        {key:'7', value:'Hawassa'},
        {key:'5', value:'Jijiga'},
        {key:'6', value:'Jimma'},
        {key:'7', value:'Kombolcha'},
        {key:'6', value:'Mekele'},
        {key:'7', value:'Shashemene'},
    ]
    
    const carMakeData = [
        {key:'1', value:'Abay'},
        {key:'2', value:'Audi'},
        {key:'2', value:'BMW'},
        {key:'3', value:'Cardilac'},
        {key:'3', value:'Chevrolet'},
        {key:'4', value:'Daewoo'},
        {key:'5', value:'Daihatsu'},
        {key:'6', value:'Ford'},
        {key:'7', value:'FIAT'},
        {key:'5', value:'Hummer'},
        {key:'6', value:'Hyundai'},
        {key:'7', value:'Honda'},
        {key:'6', value:'ISUZU'},
        {key:'7', value:'IVECO'},
        {key:'3', value:'Jeep'},
        {key:'4', value:'Kia'},
        {key:'5', value:'Lada'},
        {key:'6', value:'Land Rover'},
        {key:'7', value:'Lexus'},
        {key:'5', value:'Lifan'},
        {key:'3', value:'Mercedes'},
        {key:'4', value:'Mazda'},
        {key:'5', value:'Mitsubishi'},
        {key:'6', value:'Nissan'},
        {key:'7', value:'Peugeot'},
        {key:'5', value:'Scania'},
        {key:'6', value:'Suzuki'},
        {key:'7', value:'Toyota'},
        {key:'6', value:'VW'},
        {key:'7', value:'Volvo'},
        {key:'3', value:'Other'},
    ]

    console.log(`../../../assets/museum.jpg`);
    
    const navigateToDetail = (car: CarInterface) => {
        console.log('navigateToDetail');
        console.log(car);
        console.log(navigation);
        navigation.navigate('CarDetail', {car})
    }
  
    const VisibleItem = (props: { data: any; }) => {
        const { data } = props;
        console.log(data.item);
        
        return (
            <TouchableOpacity style={styles.rowFront} onPress={() => navigateToDetail(data.item)}>
                <TouchableOpacity style={[ styles.shadow,{position: 'absolute', right: 4, top: 4, zIndex: 1000,
                    borderWidth: 0, borderColor: 'black', shadowColor: 'black', padding: 2, borderRadius: 15}]}>
                    <MaterialCommunityIcons name="delete" size={22} color="black" />
                </TouchableOpacity>
                <View style={styles.rowFrontVisible}>
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                        <Image style={styles.image} source={data.item.image}/>
                        <View style={{marginLeft: 10}}>
                            <Text numberOfLines={2} style={{fontWeight: 'bold', width:  Dimensions.get('screen').width/1.1 - 150}}>{data.item.title}</Text>
                            <View style={{flexDirection: 'row'}}>
                            <AntDesign name="star" size={17} color="#ffa534" />
                            <AntDesign name="star" size={17} color="#ffa534" />
                            <AntDesign name="star" size={17} color="#ffa534" />
                            <AntDesign name="star" size={17} color="#ffa534" />
                            <AntDesign name="star" size={17} color="#ffa534" />
                            </View>
                            <Text style={{color: 'gray', fontWeight: '600'}}>{'5'} Seater</Text>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{color: 'green', fontWeight: '600'}}>{'220'} ETB</Text>
                                <Text style={{fontWeight: '600'}}>/day</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={[ styles.shadow,{position: 'absolute', right: 4, bottom: 4, zIndex: 1000,
                    borderWidth: 0, borderColor: 'black', shadowColor: 'black', padding: 5, borderRadius: 15}]}
                    onPress={() => setVisibleModal(true)}>
                    <FontAwesome5 name="edit" size={18} color="black" />
                </TouchableOpacity>
            </TouchableOpacity>);
    }

    const renderItem = (data:any, rowMap:any) =>{
        
        return <VisibleItem data={data}/>;
    };
    
    function closeRow(rowMap: any, rowKey: any) {
        if(rowMap[rowKey]){
            rowMap[rowKey].closeRow();
        }
    }

    function deleteRow(rowMap: any, rowKey: any) {
        closeRow(rowMap, rowKey)
        const newData = [...listData];
        const prevIndex = listData.findIndex(item => item.key === rowKey)
        newData.splice(prevIndex, 1)
        setListData(newData)
    }
    
    const HiddenItemWithActions= (props: { swipeAnimatedValue: any; onClose: any; onDelete: any; data: any; rowMap: any; }) => {
        const { swipeAnimatedValue, onClose, onDelete, data, rowMap } = props;
        return (
            <View style={styles.rowBack}>
                <Text></Text>
                <TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnLeft]} onPress={onClose}>
                    <MaterialCommunityIcons
                        name="close-circle-outline"
                        size={25}
                        style={styles.trash}
                        color="#fff"
                        />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnRight]} onPress={onDelete}>
                    <Animated.View
                        style={[
                        styles.trash,
                        {
                            transform: [
                            {
                                scale: swipeAnimatedValue.interpolate({
                                inputRange: [-90, -45],
                                outputRange: [1, 0],
                                extrapolate: 'clamp',
                                }),
                            },
                            ],
                        },
                        ]}>
                        <MaterialCommunityIcons
                        name="trash-can-outline"
                        size={25}
                        color="#fff"
                        />
                    </Animated.View>
                </TouchableOpacity>
            </View>
        )
    }
    const renderHiddenItem = (data: any, rowMap: any) => {
        

        return (<HiddenItemWithActions 
            data={data}
            rowMap={rowMap}
            onClose={() => closeRow(rowMap, data.item.key)}
            onDelete={() => deleteRow(rowMap, data.item.key)} 
            swipeAnimatedValue={undefined}
            />)
    };

    return (
        <View style={styles.container}>

            { listData.length > 0 && (
                
            <View>
                <Text style={{ marginLeft: 15, fontWeight: 'bold', fontSize: 20 }}>Posts</Text>
                <FlatList
                    data={listData}
                    renderItem={(item)=> renderItem(item, null)}
                    // renderItem={(item) => renderItem}
                    // renderHiddenItem={renderHiddenItem}
                    // renderHiddenItem={ (data, rowMap) => (
                    //     <View style={styles.rowBack}>
                    //         <Text>Left</Text>
                    //         <Text>Right</Text>
                    //     </View>
                    // )}
                    // leftOpenValue={75}
                    // rightOpenValue={-150}
                    // disableRightSwipe 
                    />
                
            </View>)}
            {listData.length == 0 && (
                <>
                    <FontAwesome name="car" size={50} color="green" />
                    <Text style={{fontWeight: '700', fontSize: 16, color: 'gray'}}>No Vehicle yet</Text>
                </>
            )}
            <TouchableOpacity  style={{right: 10, bottom: 15, width: 57, alignItems: 'center', alignSelf: 'flex-end', position: 'absolute'}}
             onPress={() => {
                setVisibleModal(true)
             }}>
                <View style={{backgroundColor: 'white', borderRadius: 50, width: 50}}>
                    <MaterialIcons name="add-circle" size={50} color="green" />
                </View>
            </TouchableOpacity>
            <Modal
                style={{backgroundColor: 'red'}}
                animationType="slide"
                transparent={true}
                visible={visibleModal}
                onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setVisibleModal(!visibleModal);
                }}>
                    <View style={[styles.shadow,{backgroundColor: '#ececec', margin: 10, marginTop: 10, borderRadius: 20, padding: 10, height: Dimensions.get('screen').height / 1.1 - 50}]}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{alignSelf: 'center', flexDirection : 'row', flex: 4, marginTop: 10, alignItems : 'center', justifyContent : 'center'}}>
                            <TouchableOpacity
                                style={[styles.shadow, {
                                    backgroundColor: step == 1? 'green':'gray',                                    
                                    padding: 2, marginHorizontal: 2, borderRadius: 5}]}
                                    onPress={()=> setStep(1)}>
                                        <View style={{
                                            borderWidth: step == 1?.5: 0, padding: 3, borderColor: 'white', borderRadius: 3,
                                        }}>
                                            <Text style={{color: 'white', fontWeight: '500'}}>Step 1</Text>
                                        </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                style={[styles.shadow, {
                                    backgroundColor: step == 2? 'green':'gray',                     
                                    padding: 2, marginHorizontal: 2, borderRadius: 5}]}
                                    onPress={()=> setStep(2)}>
                                        <View style={{
                                            borderWidth: step == 2?.5: 0, padding: 3, borderColor: 'white', borderRadius: 3,
                                        }}>
                                            <Text style={{color: 'white', fontWeight: '500'}}>Step 2</Text>
                                        </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                style={[styles.shadow, {
                                    backgroundColor: step == 3? 'green':'gray',                         
                                    padding: 2, marginHorizontal: 2, borderRadius: 5}]}
                                    onPress={()=> setStep(3)}>
                                        <View style={{
                                            borderWidth: step == 3?.5: 0, padding: 3, borderColor: 'white', borderRadius: 3,
                                        }}>
                                            <Text style={{color: 'white', fontWeight: '500'}}>Step 3</Text>
                                        </View>
                                </TouchableOpacity>
                                
                            </View>
                            
                            <TouchableOpacity style={{alignItems: 'flex-end', marginHorizontal: 10 , paddingTop: 10}}
                                onPress={()=> setVisibleModal(false)}>
                                <SimpleLineIcons name="close" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                        
                        
                        <View>
                            { step == 1 && (
                            <>
                            <View style={{ width: Dimensions.get('screen').width / 1.1 - 10, paddingLeft: 10, paddingVertical: 5 }}>
                            <Text style={{ fontWeight: '600', marginBottom: 10 }}>Model</Text>
                            <TextInput
                                placeholder='Model'
                                // value={searchText}
                                style={[styles.searchBarInput, styles.shadow, { width: Dimensions.get('screen').width / 1.1 - 20, }]}
                                onChangeText={(text) => setModel(text)}
                            >
                            </TextInput>
                            
                            </View>
                            <View style={{ width: Dimensions.get('screen').width / 1.1 - 10, paddingLeft: 10, paddingVertical: 5 }}>
                                <Text style={{ fontWeight: '600', marginBottom: 10 }}>Location</Text>
                                {/* <TextInput
                                    placeholder='Location'
                                    // value={searchText}                                    
                                    style={[styles.searchBarInput, styles.shadow, { width: Dimensions.get('screen').width / 1.1 - 20, }]}
                                    onChangeText={(text) => setModel(text)}
                                >
                                    
                                </TextInput> */}
                                <SelectList 
                                        setSelected={(val: string) => setLanguageSelected(val)} 
                                        data={locationData} 
                                        save="value"
                                        defaultOption={{ key:'1', value:'Location' }}
                                        boxStyles={{
                                            borderWidth: 0,
                                            shadowColor:'green',
                                            shadowOpacity: 0.58,
                                            shadowRadius:22,
                                            shadowOffset: {
                                                height: 15,
                                                width: 15
                                            },
                                            elevation: 24,
                                            backgroundColor: 'white',                                           
                                        }}                                        
                                    />
                            </View><View style={{ width: Dimensions.get('screen').width / 1.1 - 10, paddingLeft: 10, paddingVertical: 5 }}>
                                <Text style={{ fontWeight: '600', marginBottom: 10 }}>Car Make</Text>
                                {/* <TextInput
                                    placeholder='Car Make'
                                    // value={searchText}                                    
                                    style={[styles.searchBarInput, styles.shadow, { width: Dimensions.get('screen').width / 1.1 - 20, }]}
                                    onChangeText={(text) => setModel(text)}
                                >
                                </TextInput> */}
                                <SelectList 
                                        setSelected={(val: string) => setLanguageSelected(val)} 
                                        data={carMakeData} 
                                        save="value"
                                        defaultOption={{ key:'1', value:'Car Make' }}
                                        boxStyles={{
                                            borderWidth: 0,
                                            shadowColor:'green',
                                            shadowOpacity: 0.58,
                                            shadowRadius:22,
                                            shadowOffset: {
                                                height: 15,
                                                width: 15
                                            },
                                            elevation: 24,
                                            backgroundColor: 'white',                          
                                        }}                                        
                                    />
                            </View>
                            <View style={{ width: Dimensions.get('screen').width / 1.1 - 10, paddingLeft: 10, paddingVertical: 5 }}>
                                <Text style={{ fontWeight: '600', marginBottom: 10 }}>Number of Seat</Text>
                                <TextInput
                                    placeholder='Seater'
                                    // value={searchText}
                                    keyboardType='numeric'
                                    style={[styles.searchBarInput, styles.shadow, { width: Dimensions.get('screen').width / 1.1 - 20, }]}
                                    onChangeText={(text) => setModel(text)}
                                >
                                </TextInput>
                            </View><View style={{ width: Dimensions.get('screen').width / 1.1 - 10, paddingLeft: 10, paddingVertical: 5 }}>
                                <Text style={{ fontWeight: '600', marginBottom: 10 }}>Price (per day)</Text>
                                <TextInput
                                    placeholder='0.0'
                                    // value={searchText}     
                                    keyboardType='numeric'                               
                                    style={[styles.searchBarInput, styles.shadow, { width: Dimensions.get('screen').width / 1.1 - 20, }]}
                                    onChangeText={(text) => setModel(text)}
                                >
                                </TextInput>
                            </View></>
                            )}

                            {step == 2 && (
                            <>
                            <View style={{ width: Dimensions.get('screen').width / 1.1 - 10, paddingLeft: 10, paddingVertical: 5 }}>
                            <Text style={{ fontWeight: '600', marginBottom: 10 }}>Transmission</Text>
                            
                            <View style={{flexDirection: 'row'}}>
                                <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} onPress={()=> setTransmission('Automatic')}>
                                    <View style={{width: 24, borderWidth: .5, borderRadius: 12, alignItems: 'center',
                                                    borderColor: transmission == 'Automatic'?'green': 'gray', marginRight: 10, height: 24, justifyContent: 'center'}}>
                                        <View style={{width: 20, height: 20, 
                                            backgroundColor: transmission == 'Automatic'?'green': 'transparent',
                                            borderColor: transmission == 'Automatic'?'green': 'gray', borderRadius: 10, borderWidth: .5}}>                                                
                                        </View>
                                    </View>
                                    
                                    <Text style={{fontWeight: '500', color: 'gray'}}>Automatic</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', marginLeft: 40}} onPress={()=> setTransmission('Manual')}>
                                    <View style={{width: 24, borderWidth: .5, borderRadius: 12, alignItems: 'center',
                                            borderColor: transmission == 'Manual'?'green': 'gray', marginRight: 10, height: 24, justifyContent: 'center'}}>
                                        <View style={{width: 20, height: 20, 
                                            backgroundColor: transmission == 'Manual'?'green': 'transparent',
                                            borderColor: transmission == 'Manual'?'green': 'gray', borderRadius: 10, borderWidth: .5}}>
                                        </View>
                                    </View>
                                    
                                    <Text style={{fontWeight: '500', color: 'gray'}}>Manual</Text>
                                </TouchableOpacity>
                            </View>
                        </View><View style={{ width: Dimensions.get('screen').width / 1.1 - 10, paddingLeft: 10, paddingVertical: 5 }}>
                                <Text style={{ fontWeight: '600', marginBottom: 10 }}>Fuel Type</Text>
                                
                                <View style={{flexDirection: 'row'}}>
                                    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} onPress={()=> setFuelType('Benzene')}>
                                        
                                        <View style={{width: 24, borderWidth: .5, borderRadius: 12, alignItems: 'center',
                                                borderColor: fuelType == 'Benzene'?'green': 'gray', marginRight: 10, height: 24, justifyContent: 'center'}}>
                                            <View style={{width: 20, height: 20, 
                                                backgroundColor: fuelType == 'Benzene'?'green': 'transparent',
                                                borderColor: fuelType == 'Benzene'?'green': 'gray', borderRadius: 10, borderWidth: .5}}>
                                            </View>
                                        </View>    
                                        <Text style={{fontWeight: '500', color: 'gray'}}>Benzene</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', marginLeft: 15}} onPress={()=> setFuelType('Diesel')}>
                                        <View style={{width: 24, borderWidth: .5, borderRadius: 12, alignItems: 'center',
                                                    borderColor: fuelType == 'Diesel'?'green': 'gray', marginRight: 10, height: 24, justifyContent: 'center'}}>
                                            <View style={{width: 20, height: 20, 
                                                backgroundColor: fuelType == 'Diesel'?'green': 'transparent',
                                                borderColor: fuelType == 'Diesel'?'green': 'gray', borderRadius: 10, borderWidth: .5}}>                                                    
                                                </View>
                                        </View>
                                        
                                        <Text style={{fontWeight: '500', color: 'gray'}}>Diesel</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', marginLeft: 15}} onPress={()=> setFuelType('Electric')}>
                                        <View style={{width: 24, borderWidth: .5, borderRadius: 12, alignItems: 'center',
                                                borderColor: fuelType == 'Electric'?'green': 'gray', marginRight: 10, height: 24, justifyContent: 'center'}}>
                                            <View style={{width: 20, height: 20, 
                                                backgroundColor: fuelType == 'Electric'?'green': 'transparent',
                                                borderColor: fuelType == 'Electric'?'green': 'gray', borderRadius: 10, borderWidth: .5}}>
                                            </View>
                                        </View>                                        
                                        <Text style={{fontWeight: '500', color: 'gray'}}>Electric</Text>
                                    </TouchableOpacity>
                                </View>
                            </View><View style={{ width: Dimensions.get('screen').width / 1.1 - 10, paddingLeft: 10, paddingVertical: 5 }}>
                                <Text style={{ fontWeight: '600', marginBottom: 10 }}>Model</Text>
                                <TextInput
                                    placeholder='Model'
                                    // value={searchText}                                    
                                    style={[styles.searchBarInput, styles.shadow, { width: Dimensions.get('screen').width / 1.1 - 20, }]}
                                    onChangeText={(text) => setModel(text)}
                                >
                                </TextInput>
                            </View><View style={{ width: Dimensions.get('screen').width / 1.1 - 10, paddingLeft: 10, paddingVertical: 5 }}>
                                <Text style={{ fontWeight: '600', marginBottom: 10 }}>Description</Text>
                                <TextInput
                                    placeholder='Description'
                                    // value={searchText}                                    
                                    style={[styles.searchBarInput, styles.shadow, { width: Dimensions.get('screen').width / 1.1 - 20, }]}
                                    onChangeText={(text) => setModel(text)}
                                >
                                </TextInput>
                            </View>
                            <View style={{  
                                flexDirection: 'row', alignItems: 'center',
                                width: Dimensions.get('screen').width / 1.1 - 10, paddingLeft: 10, paddingVertical: 5 }}>
                                <Text style={{ fontWeight: '600', marginBottom: 10 }}>Has a license plate?</Text>
                                <Switch style={{flex: 1}}
                                    trackColor={{false: '#767577', true: 'green'}}
                                    thumbColor={hasLicensePlate ? '#cefad0' : '#f4f3f4'}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={setHasLicensePlate}
                                    value={hasLicensePlate}
                                />
                            </View></>)}
                            
                            {step == 3 && (<><View style={{ width: Dimensions.get('screen').width / 1.1 - 10, paddingLeft: 10, paddingVertical: 5 }}>
                            <Text style={{ fontWeight: '600', marginBottom: 10 }}>Image</Text>
                            <TouchableOpacity style={[styles.shadow, {
                                backgroundColor: 'white',
                                flexDirection: 'row', padding: 5,
                                borderRadius: 15,
                                alignSelf: 'flex-start',
                                paddingRight: 10
                            }]}>
                                <Ionicons name="add-circle-outline" size={24} color="black" />
                                <Text style={{ paddingLeft: 5 }}>Add File</Text>
                            </TouchableOpacity>
                        </View><View style={{ width: Dimensions.get('screen').width / 1.1 - 10, paddingLeft: 10, paddingVertical: 5 }}>
                                <Text style={{ fontWeight: '600', marginBottom: 10 }}>ID Card</Text>
                                <TouchableOpacity style={[styles.shadow, {
                                    backgroundColor: 'white',
                                    flexDirection: 'row', padding: 5,
                                    borderRadius: 15,
                                    alignSelf: 'flex-start',
                                    paddingRight: 10
                                }]}>
                                    <Ionicons name="add-circle-outline" size={24} color="black" />
                                    <Text style={{ paddingLeft: 5 }}>Add File</Text>
                                </TouchableOpacity>
                            </View><View style={{ width: Dimensions.get('screen').width / 1.1 - 10, paddingLeft: 10, paddingVertical: 5 }}>
                                <Text style={{ fontWeight: '600', marginBottom: 10 }}>Driving License</Text>
                                <TouchableOpacity style={[styles.shadow, {
                                    backgroundColor: 'white',
                                    flexDirection: 'row', padding: 5,
                                    borderRadius: 15,
                                    alignSelf: 'flex-start',
                                    paddingRight: 10
                                }]}>
                                    <Ionicons name="add-circle-outline" size={24} color="black" />
                                    <Text style={{ paddingLeft: 5 }}>Add File</Text>
                                </TouchableOpacity>
                            </View></>)}
                        </View>
                        <TouchableOpacity style={{
                            backgroundColor: 'green',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: 10,
                            borderRadius: 5,
                            marginTop: 10,
                            position: 'absolute',
                            bottom: 10,
                            left: 10,
                            right: 10,
                            }}>
                            <Text style={{color: 'white', fontWeight: '700', fontSize: 24}}>Submit</Text>
                        </TouchableOpacity>

                    </View>
            </Modal>
        <StatusBar style="auto"/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f4f4f4',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
    },
    backTextWhite: {
      color: '#FFF',
    },
    rowFront: {
      backgroundColor: '#FFF',
      borderRadius: 5,
      height: 120,
      margin: 5,
      marginBottom: 10,
      shadowColor: 'green',
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.8,
      shadowRadius: 22,
      elevation: 5,
    },
    rowFrontVisible: {
      backgroundColor: '#FFF',
      borderRadius: 5,
      height: 60,
      padding: 10,
      marginBottom: 10,
    },
    rowBack: {
      alignItems: 'center',
      backgroundColor: '#DDD',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 15,
      margin: 5,
      marginBottom: 15,
      borderRadius: 5,
    },
    backRightBtn: {
      alignItems: 'flex-end',
      bottom: 0,
      justifyContent: 'center',
      position: 'absolute',
      top: 0,
      width: 75,
      paddingRight: 17,
    },
    backRightBtnLeft: {
      backgroundColor: '#1f65ff',
      right: 75,
    },
    backRightBtnRight: {
      backgroundColor: 'red',
      right: 0,
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
    },
    trash: {
      height: 25,
      width: 25,
      marginRight: 7,
    },
    title: {
      fontSize: 14,
      fontWeight: 'bold',
      marginBottom: 5,
      color: '#666',
    },
    details: {
      fontSize: 12,
      color: '#999',
    },
    image: {
        height: 100,
        width: 150,
        borderRadius: 5,
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
  });