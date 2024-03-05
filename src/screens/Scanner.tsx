import { BarCodeScanner } from 'expo-barcode-scanner';
import { useCameraPermissions } from 'expo-image-picker';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';

export default function App() {
    // const [cammeraStatus, requestPermissions] = useCameraPermissions();
    const [hasPermission, setHasPermission] = useState<Boolean>(false);
    const [scanData, setScanData] = useState<any>();
    const [canScanning, setCanScanning] = useState<Boolean>(true);
    useEffect(() => {
        console.log('BarCodeScanner');
        
        (async() => {
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted')
        })
    }, []);
    const grantPermission = async() => {
        const {status} = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted')
    }
    
    const onSuccess = (type:any, e:any) => {
        console.log('scabber on read');
        console.log(e);
        console.log(type);
        setCanScanning(false)
        
    }
    if( !hasPermission){
        return (
            <View style={styles.container}>
                <Text>Please grant camera permission to app</Text>
                <Button title='Try Again Permission' onPress={async()=> grantPermission()}></Button>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {canScanning&&(<BarCodeScanner
             style={StyleSheet.absoluteFillObject}
             onBarCodeScanned={(params) =>onSuccess('type',params)}
            />)}
            {!canScanning&&(<Button title='Try Again Scanning' onPress={async()=> setCanScanning(true)}></Button>)}
        <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});
