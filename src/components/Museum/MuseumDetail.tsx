import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { MuseumInterface } from '../../data/museum.data';
import { EvilIcons, Fontisto } from '@expo/vector-icons';

// import PanoramaView from "@lightbase/react-native-panorama-view";
// import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';
import { WebView } from 'react-native-webview';
// import { PanoramaView } from 'react-native-360';
interface PropsType {
  museum: MuseumInterface
}
  
export default function ParkDetail({ museum }: PropsType) {
  console.log(museum);
  console.log(`../../../assets${museum.image}`);
  return (
    <View style={styles.container}>
      <View style={{flex:1, flexDirection: 'column'}}>
      {/* <ReactPhotoSphereViewer src={require('../../../assets/sphere/shere1.jpg')} height={'100%'} width={"100%"}></ReactPhotoSphereViewer> */}
        {/* <PanoramaView
          style={styles.viewer}
          dimensions={{ height: 230, width: Dimensions.get("window").width }}
          inputType="mono"
          imageUrl="https://raw.githubusercontent.com/googlevr/gvr-android-sdk/master/assets/panoramas/testRoom1_2kMono.jpg"
        /> */}
        {/* <PanoramaView
          style={{ height: 200, width: 400 }}
          image={require('../../../assets/sphere/shere1.jpg')} // Replace with your image path
          displayMode={'embedded'}
          enableFullscreenButton
          enableCardboardButton
          enableTouchTracking
          hidesTransitionView
          enableInfoButton={false}
        /> */}
        <Image style={ styles.image} source={museum.image} />
        
        <View style={styles.body}>
          <Text style={styles.name}>{museum.name}</Text>
          <View style={{marginLeft: 20, marginBottom: 10}}>
            <View style={styles.location}>
              <EvilIcons name="location" size={20} color="#dac111" />
              <Text style={styles.locationText}>{museum.location}</Text>
            </View>
          </View>
          
          <Text>{museum.description}</Text>
        </View>
        {/* <WebView
          style={styles.container}
          source={require('../../../assets/sphere/shere1.jpg')}
          // source={{ uri: 'https://raw.githubusercontent.com/googlevr/gvr-android-sdk/master/assets/panoramas/testRoom1_2kMono.jpg' }} // Replace with your viewer URL
        /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  image: {
    flex:1,
    height: null,
    resizeMode: 'contain',
    borderRadius: 5,
    borderColor: "#dddddd",
    backgroundColor: 'gray',
    width: Dimensions.get('screen').width/1.01,
    marginLeft: Dimensions.get('screen').width-(Dimensions.get('screen').width/1.005)
  },
  body : {
    marginHorizontal: 5,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 15,
  },
  viewer: {
    height: 230,
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
