import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image,Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MuseumInterface } from '../../data/museum.data';

const image_src = require('../../../assets/museum.jpg')
interface PropsType {
  museum: MuseumInterface
}

export default function MuseumComponent(props : any) {
  const { museum, navigation }: { museum : MuseumInterface, navigation: any } = props
  console.log(`../../../assets${museum.image}`);
  
  // const image = require(`../../../assets${museum.image}`)
  // console.log(image);
  

  const onPressCard = () => {
    //NavigationProps
    console.log(props);
    console.log('navigation');
    console.log(navigation);
    console.log(museum);
    
    // navigation.navigate('Home')
    navigation.navigate('MuseumDetail', {museum})
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPressCard()}>
        <View style={{flex: 2, flexDirection: 'row'}}>
            <Image style={ styles.image} source={museum.image} />
            <View style={{ flex: 3,paddingHorizontal: 5}}>
                <Text style={styles.titleText}>{museum.name}</Text>
                <View style={styles.location}>
                  <EvilIcons name="location" size={20} color="#dac111" />
                  <Text style={styles.locationText}>{museum.location}</Text>
                </View>
                <View style={styles.date}>
                  {/* <Fontisto name="date" size={12} color="#ddd111" />
                  <Text style={styles.dateText}>Mon Agust 2, 2023</Text> */}
                </View>
            </View>
        </View>
      <StatusBar style="auto" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 130,
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
    width: null,
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
});
