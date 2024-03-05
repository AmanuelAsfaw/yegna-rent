import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image,Text, View, Dimensions } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

const image_src = require('../../assets/museum.jpg')

export default function App() {
  return (
    <View style={styles.container}>
        <View style={{flex: 2, flexDirection: 'row'}}>
            <Image style={styles.image} source={image_src} />
            <View style={{paddingHorizontal: 5}}>
                <Text style={styles.titleText}>Science Museum</Text>
                <View style={styles.location}>
                  <EvilIcons name="location" size={20} color="#dac111" />
                  <Text style={styles.locationText}>Addis Ababa</Text>
                </View>
                <View style={styles.date}>
                  <Fontisto name="date" size={12} color="#ddd111" />
                  <Text style={styles.dateText}>Mon Agust 2, 2023</Text>
                </View>
            </View>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 130,
    width: Dimensions.get('screen').width/1.1,
    marginLeft: 20,
    borderWidth: .5,
    borderColor: "#dddddd",
    borderRadius: 5,
    marginBottom: 10,
  },
  image: {
    flex:1,
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
