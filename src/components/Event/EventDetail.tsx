import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { EventInterface } from '../../data/event.data';
import { EvilIcons, Fontisto } from '@expo/vector-icons';

// import PanoramaView from "@lightbase/react-native-panorama-view";
// import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';
import { WebView } from 'react-native-webview';
import { color } from '@rneui/base';
import { BackgroundColor, TextColor, ThemType } from '../../theme';
// import { PanoramaView } from 'react-native-360';
interface PropsType {
    event: EventInterface
}
  
export default function EventDetail({ event }: PropsType) {
  console.log(event);
  console.log(`../../../assets${event.image}`);
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
        <Image style={ styles.image} source={event.image} />
        
        <View style={styles.body}>
          <Text style={styles.name}>{event.name}</Text>
          <View style={{marginLeft: 20, marginBottom: 10}}>
            <View style={styles.location}>
              <EvilIcons name="location" size={20} color="#dac111" />
              <Text style={styles.locationText}>{event.location}</Text>
            </View>
            <View style={styles.date}> 
              <Fontisto name="date" size={12} color="#ddd111" />
              <Text style={styles.dateText}>{event.date}</Text>
            </View>
          </View>
          
          <Text style={styles.description}>{event.description}</Text>
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
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    backgroundColor: BackgroundColor[ThemType]
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
    color: TextColor[ThemType]
  },
  viewer: {
    height: 230,
  },
  location: {
    flexDirection: 'row',
    marginTop: 10,
    color: TextColor[ThemType]
  },
  locationText: {
    fontSize: 16,
    color: TextColor[ThemType]
  },
  dateText: {
    fontSize: 12,
    marginLeft: 5,
    color: TextColor[ThemType]
  },
  date: {
    flexDirection: 'row',
    marginTop: 10,
  },
  description: {
    color: TextColor[ThemType]
  }
});
