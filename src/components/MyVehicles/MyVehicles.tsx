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

export default function MyVehiclesComponent(props: any) {
    const { navigation }: { navigation: any } = props;
    const [languageSelected, setLanguageSelected] = useState("");
    const [darkTheme, setDarkTheme] = useState(false);
    const [visibleModal, setVisibleModal] = useState(false);
    const [model, setModel] = useState('');
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
                <Text style={{ marginLeft: 15, fontWeight: 'bold', fontSize: 20 }}>Posts</Text><SwipeListView
                    data={listData}
                    renderItem={renderItem}
                    renderHiddenItem={renderHiddenItem}
                    // renderHiddenItem={ (data, rowMap) => (
                    //     <View style={styles.rowBack}>
                    //         <Text>Left</Text>
                    //         <Text>Right</Text>
                    //     </View>
                    // )}
                    leftOpenValue={75}
                    rightOpenValue={-150}
                    disableRightSwipe />
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
                                    padding: 5, marginHorizontal: 2, borderRadius: 5}]}
                                    onPress={()=> setStep(1)}>
                                    <Text style={{color: 'white', fontWeight: '500'}}>Step 1</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                style={[styles.shadow, {
                                    backgroundColor: step == 2? 'green':'gray',                     
                                    padding: 5, marginHorizontal: 2, borderRadius: 5}]}
                                    onPress={()=> setStep(2)}>
                                    <Text style={{color: 'white', fontWeight: '500'}}>Step 2</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                style={[styles.shadow, {
                                    backgroundColor: step == 3? 'green':'gray',                         
                                    padding: 5, marginHorizontal: 2, borderRadius: 5}]}
                                    onPress={()=> setStep(3)}>
                                    <Text style={{color: 'white', fontWeight: '500'}}>Step 3</Text>
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
                            </View><View style={{ width: Dimensions.get('screen').width / 1.1 - 10, paddingLeft: 10, paddingVertical: 5 }}>
                                <Text style={{ fontWeight: '600', marginBottom: 10 }}>Number of Seat</Text>
                                <TextInput
                                    placeholder='Seater'
                                    // value={searchText}
                                    style={[styles.searchBarInput, styles.shadow, { width: Dimensions.get('screen').width / 1.1 - 20, }]}
                                    onChangeText={(text) => setModel(text)}
                                >
                                </TextInput>
                            </View><View style={{ width: Dimensions.get('screen').width / 1.1 - 10, paddingLeft: 10, paddingVertical: 5 }}>
                                <Text style={{ fontWeight: '600', marginBottom: 10 }}>Price (per day)</Text>
                                <TextInput
                                    placeholder='0.0'
                                    // value={searchText}                                    
                                    style={[styles.searchBarInput, styles.shadow, { width: Dimensions.get('screen').width / 1.1 - 20, }]}
                                    onChangeText={(text) => setModel(text)}
                                >
                                </TextInput>
                            </View><View style={{ width: Dimensions.get('screen').width / 1.1 - 10, paddingLeft: 10, paddingVertical: 5 }}>
                                <Text style={{ fontWeight: '600', marginBottom: 10 }}>Location</Text>
                                <TextInput
                                    placeholder='Location'
                                    // value={searchText}                                    
                                    style={[styles.searchBarInput, styles.shadow, { width: Dimensions.get('screen').width / 1.1 - 20, }]}
                                    onChangeText={(text) => setModel(text)}
                                >
                                </TextInput>
                            </View><View style={{ width: Dimensions.get('screen').width / 1.1 - 10, paddingLeft: 10, paddingVertical: 5 }}>
                                <Text style={{ fontWeight: '600', marginBottom: 10 }}>Car Make</Text>
                                <TextInput
                                    placeholder='Car Make'
                                    // value={searchText}                                    
                                    style={[styles.searchBarInput, styles.shadow, { width: Dimensions.get('screen').width / 1.1 - 20, }]}
                                    onChangeText={(text) => setModel(text)}
                                >
                                </TextInput>
                            </View></>)}

                            {step == 2 && (
                            <>
                            <View style={{ width: Dimensions.get('screen').width / 1.1 - 10, paddingLeft: 10, paddingVertical: 5 }}>
                            <Text style={{ fontWeight: '600', marginBottom: 10 }}>Transmission</Text>
                            <TextInput
                                placeholder='Car Make'
                                // value={searchText}                                    
                                style={[styles.searchBarInput, styles.shadow, { width: Dimensions.get('screen').width / 1.1 - 20, }]}
                                onChangeText={(text) => setModel(text)}
                            >
                            </TextInput>
                        </View><View style={{ width: Dimensions.get('screen').width / 1.1 - 10, paddingLeft: 10, paddingVertical: 5 }}>
                                <Text style={{ fontWeight: '600', marginBottom: 10 }}>Fuel Type</Text>
                                <TextInput
                                    placeholder='Car Make'
                                    // value={searchText}                                    
                                    style={[styles.searchBarInput, styles.shadow, { width: Dimensions.get('screen').width / 1.1 - 20, }]}
                                    onChangeText={(text) => setModel(text)}
                                >
                                </TextInput>
                            </View><View style={{ width: Dimensions.get('screen').width / 1.1 - 10, paddingLeft: 10, paddingVertical: 5 }}>
                                <Text style={{ fontWeight: '600', marginBottom: 10 }}>Has a license plate?</Text>
                                <TextInput
                                    placeholder='Car Make'
                                    // value={searchText}                                    
                                    style={[styles.searchBarInput, styles.shadow, { width: Dimensions.get('screen').width / 1.1 - 20, }]}
                                    onChangeText={(text) => setModel(text)}
                                >
                                </TextInput>
                            </View><View style={{ width: Dimensions.get('screen').width / 1.1 - 10, paddingLeft: 10, paddingVertical: 5 }}>
                                <Text style={{ fontWeight: '600', marginBottom: 10 }}>Model</Text>
                                <TextInput
                                    placeholder='Car Make'
                                    // value={searchText}                                    
                                    style={[styles.searchBarInput, styles.shadow, { width: Dimensions.get('screen').width / 1.1 - 20, }]}
                                    onChangeText={(text) => setModel(text)}
                                >
                                </TextInput>
                            </View><View style={{ width: Dimensions.get('screen').width / 1.1 - 10, paddingLeft: 10, paddingVertical: 5 }}>
                                <Text style={{ fontWeight: '600', marginBottom: 10 }}>Description</Text>
                                <TextInput
                                    placeholder='Car Make'
                                    // value={searchText}                                    
                                    style={[styles.searchBarInput, styles.shadow, { width: Dimensions.get('screen').width / 1.1 - 20, }]}
                                    onChangeText={(text) => setModel(text)}
                                >
                                </TextInput>
                            </View><View style={{ width: Dimensions.get('screen').width / 1.1 - 10, paddingLeft: 10, paddingVertical: 5 }}>
                                <Text style={{ fontWeight: '600', marginBottom: 10 }}>Has a license plate?</Text>
                                <TextInput
                                    placeholder='Car Make'
                                    // value={searchText}                                    
                                    style={[styles.searchBarInput, styles.shadow, { width: Dimensions.get('screen').width / 1.1 - 20, }]}
                                    onChangeText={(text) => setModel(text)}
                                >
                                </TextInput>
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