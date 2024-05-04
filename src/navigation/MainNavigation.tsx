import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { EventDetailScreen, EventScreen, HomeScreen, MuseumAndParkScreen, ScannerScreen, SettingsScreen } from '../screens';
import { Entypo, Ionicons, MaterialIcons, Zocial, FontAwesome } from '@expo/vector-icons';
// import { EventScreenNavigator, HomeScreenNavigator, MuseumAndParkScreenNavigator, PostsScreenNavigator, ProfileScreenNavigator, SearchScreenNavigator } from './StackNavigation';
import { BackgroundColor, ThemType } from '../theme';
import ProfileScreen from '../screens/Profile';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ParkDetailScreen from '../screens/ParkDetail';
import MuseumDetailScreen from '../screens/MuseumDetail';
import FavoritesScreen from '../screens/ProfilePages/Favorites';
import SearchScreen from '../screens/Search';
import CustomerSupportScreen from '../screens/ProfilePages/CustomerSupport';
import EditProfileScreen from '../screens/ProfilePages/EditProfile';
import MyBookingScreen from '../screens/ProfilePages/MyBooking';
import MyVehiclesScreen from '../screens/MyVehicles';
import CarDetailScreen from '../screens/CarDetail';

const Tab = createBottomTabNavigator()

const screenOptions = {
    tabBarShowLabel:false,
    headerShown:false,
    tabBarStyle:{
      // position: "absolute",
      bottom: 0,
      right: 0,
      left: 0,
      elevation: 0,
      height: 60,
      // background: "#fff",
      background: BackgroundColor[ThemType]
    }
}

export  function TabNavigation() {
    const vector_components = [
      <Entypo name="home" size={24} color="black" />,
      // <MaterialIcons name="favorite" size={24} color="black" />,
      <FontAwesome name="car" size={24} color="black" />,
      <FontAwesome name="search" size={24} color="black" />,
      <MaterialIcons name="person" size={24} color="black" />,
      <Zocial name="eventful" size={24} color="black" />,
    ]
    const focused_vector_components = [
      <Entypo name="home" size={24} color="green" />,
      // <MaterialIcons name="favorite" size={24} color="green" />,
      <FontAwesome name="car" size={24} color="green" />,
      <FontAwesome name="search" size={24} color="green" />,
      <MaterialIcons name="person" size={24} color="green" />,
      <Zocial name="eventful" size={24} color="green" />,
    ]
  
    const TabBarIcon = (focused:boolean, id:number, label:string) => {
      const VectorComponent = focused?focused_vector_components[id-1]:vector_components[id-1]
      return <View style={{alignItems: 'center', justifyContent: 'center'}}>
        {VectorComponent}
        <Text>{label}</Text>
      </View>
    }
    return (  
        <Tab.Navigator screenOptions={screenOptions}>      
            <Tab.Screen 
            name='HomeTab' 
            component={HomeScreenNavigator}
            options={{
                tabBarIcon:(focused)=> TabBarIcon(focused.focused,1,'Home'),
            }}
            />   
            <Tab.Screen 
            name='SearchTab' 
            component={SearchScreenNavigator}
            options={{
                tabBarIcon:(focused)=> TabBarIcon(focused.focused,3,'Search')
            }}
            />     
            <Tab.Screen 
            name='Post' 
            component={PostsScreenNavigator}
            options={{
                tabBarIcon:(focused)=> TabBarIcon(focused.focused,2,'Posts')
            }}
            />  
            <Tab.Screen 
            name='ProfileTab' 
            component={ProfileScreenNavigator}
            options={{
                tabBarIcon:(focused)=> TabBarIcon(focused.focused,4,'Profile')
            }}
            />
        </Tab.Navigator>
    );
}

const Stack = createNativeStackNavigator();

export function StackNavigComp() {
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

export default function App() {
  return (
    <NavigationContainer>
        {/* <StackNavigComp/> */}
        <TabNavigation/>
    </NavigationContainer>
  );
}
