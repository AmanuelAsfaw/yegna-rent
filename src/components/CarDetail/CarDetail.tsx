import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image,Text, View, Dimensions, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { AntDesign, EvilIcons, FontAwesome, Fontisto, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { EventInterface } from '../../data/event.data';
import { useNavigation } from '@react-navigation/native';
import { CarInterface } from '../../data/car.data';

// import Gallery from 'react-native-image-gallery';
import { FontAwesome5 } from '@expo/vector-icons';
import { useState } from 'react';
import { CarList } from '../../data';
const image_src = require('../../../assets/museum.jpg')
interface PropsType {
  car: CarInterface
}
// type StackParamList = {
//   EventDetail: undefined
// }

// type NavigationProps = NavigationProps<StackParamList>

export default function CarComponent(props : any) {
  const { car, navigation }: { car : CarInterface, navigation: any }= props
  const [seePhone, setSeePhone] = useState(false);
  
  const [listData, setListData] = useState(
    CarList.map((car, index)=> ({
        key: `${index}`,
        ...car,
        title: car.name,
        details: car.description,
        image: car.image,
    }))
    );

  console.log(`../../../assets${car.image}`);
  // const navigation = props.navigation
  console.log(car);
  
  const onPressCard = () => {
    //NavigationProps
    console.log(props);
    console.log('navigation');
    console.log(navigation);
    
    // navigation.navigate('Home')
    // navigation.navigate('CarDetail', {car})
  }

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

  return (
    <ScrollView>
        {/* <Gallery
            style={{ flex: 1, backgroundColor: 'black', }}
            images={[
            // { source: require('yourApp/image.png'), dimensions: { width: 150, height: 150 } },
            { source: { uri: 'http://i.imgur.com/XP2BE7q.jpg' } },
            { source: { uri: 'http://i.imgur.com/5nltiUd.jpg' } },
            { source: { uri: 'http://i.imgur.com/6vOahbP.jpg' } },
            { source: { uri: 'http://i.imgur.com/kj5VXtG.jpg' } }
            ]}
        /> */}
        <View style={{flex: 1, backgroundColor: 'red', width: Dimensions.get('screen').width/1.1}}>
            <Image style={[styles.image, {maxWidth: Dimensions.get('screen').width, height: 'auto'}]} source={car.image}/></View>
        <View style={{flexDirection: 'row', margin: 10 }}>
            <View style={{flex: 2}}>
                <Text style={{fontWeight: '600'}}>{car.name}</Text>
                <View style={{flexDirection: 'row'}}>
                    <AntDesign name="star" size={15} color="#ffa534" />
                    <AntDesign name="star" size={15} color="#ffa534" />
                    <AntDesign name="star" size={15} color="#ffa534" />
                    <AntDesign name="star" size={15} color="#ffa534" />
                    <AntDesign name="star" size={15} color="#ffa534" />
                </View>
            </View>
            <View style={{alignItems: 'flex-end'}}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{color: 'green', fontWeight: '500'}}>$220</Text>
                    <Text style={{fontWeight: '500'}}> /Day</Text>
                </View>      
                    <Text style={{fontWeight: '500', color: 'gray', fontSize: 12}}> 14 February 2024</Text>
            </View>  
        </View>
        <Text style={{fontWeight: '700', fontSize: 15, marginLeft: 10}}>Renter</Text>
        <View style={[styles.shadow, {margin: 10 , padding: 5, borderRadius: 10, marginBottom: 5}]}>
            <View style={{flex: 2, flexDirection: 'row', alignItems: 'center'}}>
                <Image source={require('../../../assets/car/kia.jpg')} style={{width: 70, height: 70, borderRadius: 35, marginBottom: 10}}/>
                <View style={{marginLeft: 10, marginBottom: 15, flexDirection: 'row', justifyContent: 'space-between', flex: 1}}>
                    <View>
                        <Text style={{fontWeight: '500', fontSize: 14, marginBottom: 0}}>Cameron Williamson</Text>
                        <View style={{flexDirection: 'row'}}>
                            <AntDesign name="star" size={15} color="#ffa534" />
                            <AntDesign name="star" size={15} color="#ffa534" />
                            <AntDesign name="star" size={15} color="#ffa534" />
                            <AntDesign name="star" size={15} color="#ffa534" />
                            <AntDesign name="star" size={15} color="#ffa534" />
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}>
                        <Text style={{fontWeight: '500', fontSize: 8, marginBottom: 0}}>3 posts</Text>
                        <MaterialIcons name="navigate-next" size={24} color="black" />
                    </View>
                </View>
            </View>
            <View style={{flexDirection: 'row', flex: 2}}>
                <TouchableOpacity style={{flex: 1, flexDirection: 'row',
                    alignItems: 'center', justifyContent: 'center',
                    borderWidth: 2,
                    borderRadius: 5,
                    padding: 5,
                    borderColor: 'green'}}>
                    <AntDesign name="message1" size={24} color="green"/>
                    <Text style={{paddingLeft: 10, color: 'green', fontWeight: '700'}}>Chat</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex: 1, flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'green',
                    marginLeft: 3,
                    borderRadius: 5,
                    }} onPress={() => {setSeePhone(!seePhone)}}>
                    <Ionicons name="call-outline" size={24} color="white" />
                    <Text style={{paddingLeft: 10, color: 'white', fontWeight: '700'}}>{seePhone?'0964359872':'Call'}</Text>
                </TouchableOpacity>
            </View>
        </View>
            <Text style={{fontWeight: '700', fontSize: 15, marginLeft: 10}}>Features</Text>
            <View style={{margin: 10}}>
                <View style={{flexDirection: 'row'}}>
                    <View style={[ styles.shadow, {
                            flex: 1, marginRight: 2,
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingVertical: 10,
                            borderRadius: 5,
                            }]}>
                        <FontAwesome5 name="gas-pump" size={24} color="green" />
                        <Text style={{fontSize: 17}}>Manual</Text>
                    </View>
                    <View style={[ styles.shadow, {flex: 1, marginLeft: 2,
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingVertical: 10,
                            borderRadius: 5,
                    }]}>
                        <FontAwesome5 name="gas-pump" size={24} color="green" />
                        <Text style={{fontSize: 17}}>Benzene</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={[ styles.shadow, {
                            flex: 1, marginRight: 2,
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingVertical: 10,
                            borderRadius: 5,
                            }]}>
                        <AntDesign name="calendar" size={24} color="green" />
                        <Text style={{fontSize: 17}}> 2020 Year</Text>
                    </View>
                    <View style={[ styles.shadow, {flex: 1, marginLeft: 2,
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingVertical: 10,
                            borderRadius: 5,
                    }]}>
                        <FontAwesome name="drivers-license" size={24} color="green" />
                        <Text style={{fontSize: 17, paddingHorizontal: 5, textAlign: 'center'}} numberOfLines={2}>Has Licesnse plate</Text>
                    </View>
                </View>
            </View>
            <Text style={{fontWeight: '700', fontSize: 15, marginLeft: 10}}>Description</Text>
            <View style={[styles.shadow,{backgroundColor: 'white', margin: 10, marginVertical: 10, paddingVertical: 10, borderRadius: 5}]}>
                <Text style={{fontWeight: '400', color: 'gray', fontSize: 15, marginLeft: 10}}>WION The World is One News examines global issues with in-depth analysis. We provide much more than the news of the day. Our aim is to empower people to explore their world. With our Global headquarters in New Delhi, we bring you news on the hour, by the hour. We deliver information that is not biased</Text>
            </View>
            <Text style={{fontWeight: '700', fontSize: 15, marginLeft: 10, marginBottom: 10}}>Service For</Text>
            <View style={{flexDirection: 'row', flex: 2}}>
                <View style={[styles.shadow, { margin: 10, marginVertical: 2, paddingVertical: 5, borderRadius: 7, flex: 1, alignItems: 'center'}]}>
                    <Text style={{fontWeight: '500', color: 'gray',fontSize: 15, marginLeft: 10}}>For all</Text>
                </View>
                <View style={[styles.shadow, { margin: 10, marginVertical: 2, paddingVertical: 5, borderRadius: 7, flex: 1, alignItems: 'center'}]}>
                    <Text style={{fontWeight: '500', color: 'gray',fontSize: 15, marginLeft: 10}}>Trip</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', flex: 2}}>
                <View style={[styles.shadow, { margin: 10, marginVertical: 2, paddingVertical: 5, borderRadius: 7, flex: 1, alignItems: 'center'}]}>
                    <Text style={{fontWeight: '500', color: 'gray',fontSize: 15, marginLeft: 10}}>Wedding</Text>
                </View>
                <View style={[styles.shadow, { margin: 10, marginVertical: 2, paddingVertical: 5, borderRadius: 7, flex: 1, alignItems: 'center'}]}>
                    <Text style={{fontWeight: '500', color: 'gray',fontSize: 15, marginLeft: 10}}>Events</Text>
                </View>
            </View>
            <Text style={{fontWeight: '700', fontSize: 15, marginLeft: 10, marginVertical: 10}}>Other Details</Text>
            <View style={[styles.shadow, { 
                margin: 10, marginVertical: 2, 
                paddingVertical: 5, borderRadius: 7, flex: 2, 
                flexDirection: 'row'}]}>
                <Text style={{fontWeight: '500', color: 'gray',fontSize: 15, marginLeft: 10, flex: 1}}>Driver</Text>
                <View>
                    <Text style={{fontWeight: '500', color: 'gray',fontSize: 15, marginLeft: 10, paddingRight: 10, flex: 1, alignItems: 'flex-end'}}>Optional</Text>
                </View>
            </View>
            <View style={[styles.shadow, { 
                margin: 10, marginVertical: 2, 
                paddingVertical: 5, borderRadius: 7, flex: 2, 
                flexDirection: 'row'}]}>
                <Text style={{fontWeight: '500', color: 'gray',fontSize: 15, marginLeft: 10, flex: 1}}>Off road driving</Text>
                <View>
                    <Text style={{fontWeight: '500', color: 'gray',fontSize: 15, marginLeft: 10, paddingRight: 10, flex: 1, alignItems: 'flex-end'}}>Not Allowed</Text>
                </View>
            </View>
            <View style={[styles.shadow, { 
                margin: 10, marginVertical: 2, 
                paddingVertical: 5, borderRadius: 7, flex: 2, 
                flexDirection: 'row'}]}>
                <Text style={{fontWeight: '500', color: 'gray',fontSize: 15, marginLeft: 10, flex: 1}}>Engine cc</Text>
                <View>
                    <Text style={{fontWeight: '500', color: 'gray',fontSize: 15, marginLeft: 10, paddingRight: 10, flex: 1, alignItems: 'flex-end'}}>1.2 L</Text>
                </View>
            </View>
            <Text style={{fontWeight: '700', fontSize: 18, marginLeft: 10, marginVertical: 10}}>Recommended</Text>
            { listData.length > 0 && (
                
                <View>
                    <FlatList
                        data={listData}
                        renderItem={(item) => renderItem(item, null)}
                        />
                </View>)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // height: 130,
    minHeight: 130,
    width: Dimensions.get('screen').width/1.1,
    marginLeft: 20,
    // borderWidth: .5,
    // borderColor: "#dddddd",
    shadowColor:'#000',
    shadowOpacity: 0.58,
    shadowRadius:22,
    shadowOffset: {
        height: 15,
        width: 15
    },
    elevation: 24,
    backgroundColor: 'white',
    borderRadius: 5,
    marginVertical: 8,
  },
  image: {
    flex:2,
    height: null,
    maxWidth: 130,
    // width: Dimensions.get('screen').width,
    resizeMode: 'cover',
    borderRadius: 5,
    borderColor: "#dddddd"
  },
  titleText: {
    fontSize: 16,
    fontWeight: '700',
  },
  location: {
    flexDirection: 'row',
    marginTop: 10,
  },
  locationText: {
    fontSize: 16,
  },
  dateText: {
    fontSize: 12,
    marginLeft: 5,
  },
  date: {
    flexDirection: 'row',
    marginTop: 10,
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
});
