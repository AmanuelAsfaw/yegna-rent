import { StatusBar } from 'expo-status-bar';
import { Alert, Dimensions, Image, Modal, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';

import { SetStateAction, useState } from 'react';
import { Entypo, Octicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

export default function ProfileComponent(props : any) {
  const { navigation }: { navigation: any }= props
  const [languageSelected, setLanguageSelected] = useState("");
  const [darkTheme, setDarkTheme] = useState(false);
  const [logoutVisibility, setLogoutVisibility] = useState(false);
    console.log(`../../../assets/museum.jpg`);

    const ProfileItem = (name: string,icon_: any, screenName: string) => {
        
        return (
            <TouchableOpacity style={{paddingTop: 20, borderBottomColor: 'red', borderWidth: 0, 
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
                marginHorizontal: 5
            }}
            onPress={() => {
              if (name == 'Logout') {
                setLogoutVisibility(true)                
              } else{
                console.log('asdf');
                navigation.navigate(screenName)
              }
              
            }}
            >
                <View style={{ display: 'flex', flexDirection: 'row', paddingHorizontal: 10}}>
                    <View style={{ display: 'flex', flexDirection: 'row' , width: '90%'}}>
                        {icon_}
                        <Text style={{paddingLeft: 10}}>{name}</Text>
                    </View>
                    <MaterialIcons style={{width: '10%'}} name="navigate-next" size={24} color="black" />
                </View>
            {/* <View style={{borderColor: 'red', borderWidth: .5}}></View> */}
        </TouchableOpacity>
        )
    }
  return (
    <View style={styles.container}>
        <View style={{ width: '100%', paddingHorizontal: 10,}}>
            <Text style={{fontWeight: 'bold', fontSize: 21  }}>Profile</Text>
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
            <Image style={ styles.image} source={require('../../../assets/museum.jpg')} />
            <View style={{marginLeft: 5, justifyContent: 'center'}}>
                <Text>Cameron Williamson</Text>
                <Text>(219) 555-0114</Text>
            </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={{paddingBottom: 10}}>
          {ProfileItem('Edit Profile', <Octicons name="person" size={24} color="black" />,'EditProfile')}
          {ProfileItem('My Booking', <FontAwesome5 name="bookmark" size={24} color="black" />,'MyBooking')}
          {ProfileItem('My Favorites', <Feather name="heart" size={24} color="black" />, 'MyFavorites')}
          {ProfileItem('Notification', <MaterialIcons name="notifications-none" size={24} color="black" />,'CustomerSupport')}
          {ProfileItem('Settings', <Feather name="settings" size={24} color="black" />,'CustomerSupport')}
          {ProfileItem('Terms and condition', <SimpleLineIcons name="notebook" size={24} color="black" />,'CustomerSupport')}
          {ProfileItem('Customer Support', <AntDesign name="customerservice" size={24} color="black" />,'CustomerSupport')}
          {ProfileItem('Rate Us', <Feather name="star" size={24} color="black" />,'CustomerSupport')}
          {ProfileItem('Logout', <AntDesign name="logout" size={24} color="black" />,'CustomerSupport')}
        </ScrollView>
        <Modal
          visible={logoutVisibility}
          transparent
          style={{
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <View style={{
            backgroundColor: 'rgba(52, 52, 52, 0.3)',
            height: Dimensions.get('screen').height/1,
            justifyContent: 'center', alignItems: 'center'}}>
              <View style={{
                backgroundColor: 'white',
                paddingHorizontal: 30,
                paddingVertical: 10,
                borderRadius: 10,
              }}>
                <Text style={{fontWeight: '700'}}>Are you sure you want to logout?</Text>
                <View style={{flexDirection: 'row', marginTop: 30}}>
                  <TouchableOpacity style={[styles.shadow, {
                    shadowColor: 'gray',
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    marginHorizontal: 10,
                    borderRadius: 5,
                    }]}
                    onPress={() => setLogoutVisibility(false)}
                    >
                    <Text style={{color: 'gray', fontWeight: '700'}}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{
                    backgroundColor: 'green',
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    marginHorizontal: 10,
                    borderRadius: 5,
                    }}>
                    <Text style={{color: 'white', fontWeight: '700'}}>Logout</Text>
                  </TouchableOpacity>
                </View>
              </View>
          </View>

        </Modal>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
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
