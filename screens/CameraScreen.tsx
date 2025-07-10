import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useRoute } from '@react-navigation/native';

export default function CameraScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const route = useRoute();
  const { onScanned } = route.params as { onScanned: (data: string) => void };

  useEffect(() => {
    if (!permission || !permission.granted) {
      requestPermission();
    }
  }, []);

    const handleBarcodeScanned = ({ data }: { data: string }) => {
    if (!scanned) {
        setScanned(true);
        navigation.navigate('Scan', { barcode: data }); // navigate 回去并携带参数
    }
    };

  if (!permission?.granted) {
    return <Text>没有摄像头权限，正在请求...</Text>;
  }

  return (
    <View style={styles.container}>
      <CameraView
        onBarcodeScanned={handleBarcodeScanned}
        barcodeScannerSettings={{ barcodeTypes: ['ean13', 'qr', 'code128'] }}
        style={StyleSheet.absoluteFillObject}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
