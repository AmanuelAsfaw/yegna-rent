import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { EventDetailScreen, EventScreen, HomeScreen, MuseumAndParkScreen } from '../screens';
import { AntDesign, Ionicons, MaterialIcons, Zocial } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigation from './TabNavigation';
import ParkDetailScreen from '../screens/ParkDetail';
import MuseumDetailScreen from '../screens/MuseumDetail';
import FavoritesScreen from '../screens/ProfilePages/Favorites';
import SearchScreen from '../screens/Search';
import ProfileScreen from '../screens/Profile';
import CustomerSupportScreen from '../screens/ProfilePages/CustomerSupport';
import EditProfileScreen from '../screens/ProfilePages/EditProfile';
import MyBookingScreen from '../screens/ProfilePages/MyBooking';
import MyVehiclesScreen from '../screens/MyVehicles';
import CarDetailScreen from '../screens/CarDetail';

const Stack = createNativeStackNavigator();

export default function StackNavigComp() {
    return ( 
      <Stack.Navigator screenOptions={{headerShown: false}}
        initialRouteName='Tabs'>
        <Stack.Screen name='EventDetail' component={EventDetailScreen} />
        <Stack.Screen name='Tabs' component={TabNavigation} />
      </Stack.Navigator>
    );
}

export const HomeScreenNavigator = () => {
  return <Stack.Navigator  screenOptions={{headerShown: false}}>
    <Stack.Screen name='Home' component={HomeScreen}/>
    <Stack.Screen name='EventDetail' component={EventDetailScreen} options={{headerShown:true, title: ''}}/>
    <Stack.Screen name='ParkDetail' component={ParkDetailScreen} options={{headerShown:true, title: 'Park'}}/>
    <Stack.Screen name='MuseumDetail' component={MuseumDetailScreen} options={{headerShown:true, title: 'Museum'}}/>
    <Stack.Screen name='CarDetail' component={CarDetailScreen} options={{headerShown:true, title: ''}}/>
  </Stack.Navigator>
}

export const MuseumAndParkScreenNavigator = () => {
  return <Stack.Navigator  screenOptions={{headerShown: false}}>
    <Stack.Screen name='Museum' component={MuseumAndParkScreen}/>
    <Stack.Screen name='EventDetail' component={EventDetailScreen} options={{headerShown:true, title: ''}}/>
    <Stack.Screen name='ParkDetail' component={ParkDetailScreen} options={{headerShown:true, title: 'Park'}}/>
    <Stack.Screen name='MuseumDetail' component={MuseumDetailScreen} options={{headerShown:true, title: 'Museum'}}/>
  </Stack.Navigator>
}

export const EventScreenNavigator = () => {
  return <Stack.Navigator  screenOptions={{headerShown: false}}>
    <Stack.Screen name='Event' component={EventScreen}/>
    <Stack.Screen name='EventDetail' component={EventDetailScreen} options={{headerShown:true, title: ''}}/>
    <Stack.Screen name='MuseumDetail' component={MuseumDetailScreen} options={{headerShown:true, title: 'Museum'}}/>
  </Stack.Navigator>
}

export const SearchScreenNavigator = () => {
  return <Stack.Navigator  screenOptions={{headerShown: false}}>
    <Stack.Screen name='Search' component={SearchScreen}/>
    <Stack.Screen name='EventDetail' component={EventDetailScreen} options={{headerShown:true, title: ''}}/>
    <Stack.Screen name='MuseumDetail' component={MuseumDetailScreen} options={{headerShown:true, title: 'Museum'}}/>
    <Stack.Screen name='CarDetail' component={CarDetailScreen} options={{headerShown:true, title: ''}}/>
  </Stack.Navigator>
}

export const PostsScreenNavigator = () => {
  return <Stack.Navigator  screenOptions={{headerShown: false}}>
    <Stack.Screen name='Posts' component={MyVehiclesScreen}/>
    <Stack.Screen name='CarDetail' component={CarDetailScreen} options={{headerShown:true, title: ''}}/>
    <Stack.Screen name='MuseumDetail' component={MuseumDetailScreen} options={{headerShown:true, title: 'Museum'}}/>
  </Stack.Navigator>
}

export const ProfileScreenNavigator = () => {
  return <Stack.Navigator  screenOptions={{headerShown: false}}>
    <Stack.Screen name='Profile' component={ProfileScreen}/>
    <Stack.Screen name='CustomerSupport' component={CustomerSupportScreen} options={{headerShown:true, title: ''}}/>
    <Stack.Screen name='EditProfile' component={EditProfileScreen} options={{headerShown:true, title: 'Edit Profile' }}/>
    <Stack.Screen name='MyBooking' component={MyBookingScreen} options={{headerShown:true, title: 'My Booking' }}/>
    <Stack.Screen name='MyFavorites' component={FavoritesScreen} options={{headerShown:true, title: 'My Favorites' }}/>
    <Stack.Screen name='CarDetail' component={CarDetailScreen} options={{headerShown:true, title: ''}}/>
  </Stack.Navigator>
}
