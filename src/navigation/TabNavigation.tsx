import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { EventScreen, HomeScreen, MuseumAndParkScreen, ScannerScreen, SettingsScreen } from '../screens';
import { Entypo, Ionicons, MaterialIcons, Zocial, FontAwesome } from '@expo/vector-icons';
import { EventScreenNavigator, HomeScreenNavigator, MuseumAndParkScreenNavigator, PostsScreenNavigator, ProfileScreenNavigator, SearchScreenNavigator } from './StackNavigation';
import { BackgroundColor, ThemType } from '../theme';
import ProfileScreen from '../screens/Profile';

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

export default function TabNavigation() {
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
            name='Search' 
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
            name='Profile' 
            component={ProfileScreenNavigator}
            options={{
                tabBarIcon:(focused)=> TabBarIcon(focused.focused,4,'Profile')
            }}
            />
        </Tab.Navigator>
    );
}
