import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MuseumListComponent, ParkListComponent } from '../components';

export default function MuseumAndParkScreen(props: any) {
  const [active, setActive] = useState<'museum'|'park'>('museum')
  return (
    <View style={styles.container}>
        <View style={styles.toogle}>
          <TouchableOpacity
            style={active == 'museum'? [styles.museum, styles.active]:[styles.museum, styles.disactive] }
            disabled={active === 'museum'}
            onPress={() => setActive('museum')}>
              <MaterialIcons name="museum" size={24} color={active == 'museum'? "#fff" :"black"} />
              <Text style={active == 'museum'? styles.activeText:styles.disactiveText}>Museum</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={active == 'park'? [styles.park, styles.active]:[styles.park, styles.disactive] }
            disabled={active === 'park'}
            onPress={() => setActive('park')}>
              <MaterialIcons name="park" size={24} color={active == 'park'? "#fff" :"black"} />
            <Text style={active == 'park'? styles.activeText:styles.disactiveText}>Park</Text>
            </TouchableOpacity>
        </View>
        {active === 'museum' && (
          <MuseumListComponent  {...props} navigation={props.navigation}/>
        )}
        {active === 'park' && (
          <ParkListComponent  {...props} navigation={props.navigation}/>
        )}
      <StatusBar style="auto" />
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
    marginBottom: 50,
  },
  toogle: {
    flexDirection: 'row',
    // height: 80,
    
    shadowColor:'#000',
    shadowOpacity: 0.58,
    shadowRadius:22,
    shadowOffset: {
        height: 15,
        width: 0
    },
    elevation: 24,
    marginBottom: 10,
    backgroundColor: "lightgray",
    borderRadius: 20,
    padding: 5,
  },
  museum: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    paddingVertical: 5,
    borderRadius:15,
  },
  active:{
    backgroundColor: '#111',
  },
  disactive:{
    backgroundColor: "lightgray",
  },
  park: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    paddingVertical: 5,
    borderRadius:15,
  },
  activeText: {
    fontSize: 22,
    color: "#fff",
  },
  disactiveText: {
    fontSize: 22,
    color: "black",
  }
});
