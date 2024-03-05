import { StatusBar } from 'expo-status-bar';
import { Animated, Dimensions, FlatList, Image, PanResponder, StyleSheet, Switch, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';

import { SetStateAction, useState } from 'react';
import { MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { SwipeListView } from 'react-native-swipe-list-view';
import { CarList } from '../../../data';
import { CarInterface } from '../../../data/car.data';

export default function ProfileComponent(props : any) {
    const { car, navigation }: { car : CarInterface, navigation: any }= props
    const [languageSelected, setLanguageSelected] = useState("");
    const [darkTheme, setDarkTheme] = useState(false);
    const [listData, setListData] = useState(
        CarList.map((car, index)=> ({
            key: `${index}`,
            title: car.name,
            details: car.description,
            image: car.image,
        }))
    );

    console.log(`../../../assets/museum.jpg`);

    const VisibleItem = (props: { data: any; }) => {
        const { data } = props;
        console.log(data.item);
        
        const navigateToDetail = (car: CarInterface) => {
            console.log('navigateToDetail');
            console.log(car);
            console.log(navigation);
            navigation.navigate('CarDetail', {car})
        }

        return (
            <TouchableOpacity style={styles.rowFront} onPress={() => navigateToDetail(data.item)}>
                <TouchableHighlight style={styles.rowFrontVisible}>
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
                </TouchableHighlight>
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
                <Text>Left</Text>
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
            <SwipeListView
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
                disableRightSwipe
            />
        <StatusBar style="auto"/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f4f4f4',
      flex: 1,
    //   marginTop: 40,
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
    }
  });