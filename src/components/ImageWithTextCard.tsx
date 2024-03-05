import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image,Text, View } from 'react-native';
const image_src = require('../../assets/museum.jpg')

interface PropsType {
  title: string;
  image: any;
}

export default function App({title, image}: PropsType) {
  console.log(image);
  
  return (
    <View style={styles.container}>
        <View style={{flex: 2}}>
            <Image style={styles.image} source={image} />
            <View>
                <Text>{title}</Text>
            </View>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',

    height: 130,
    width: 130,
    marginLeft: 20,
    borderWidth: .5,
    borderColor: "#dddddd",
    borderRadius: 5,
  },
  image: {
    flex:1,
    height: null,
    width: null,
    resizeMode: 'cover',
    borderRadius: 5,
    borderColor: "#dddddd"
  }
});
