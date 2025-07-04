import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';

export default function CameraScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    if (!permission || !permission.granted) {
      requestPermission();
    }
  }, []);

  const handleBarcodeScanned = ({ data }: { data: string }) => {
    if (!scanned) {
      setScanned(true);
      navigation.navigate('Scan', { barcode: data });
    }
  };

  if (!permission?.granted) {
    return <Text>没有摄像头权限，正在请求...</Text>;
  }

  return (
    <View style={styles.container}>
      <CameraView
        onBarcodeScanned={handleBarcodeScanned}
        barcodeScannerSettings={{
          barcodeTypes: ['ean13', 'qr', 'code128'],
        }}
        style={StyleSheet.absoluteFillObject}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});