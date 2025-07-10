import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';

export default function ScanScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [id, setId] = useState('');
  const [barcode, setBarcode] = useState('');

  const handleOpenCamera = () => {
    navigation.navigate('Camera');
  };

  return (
    <View style={styles.container}>
      <Text>商品 ID：</Text>
      <TextInput
        placeholder="请输入商品 ID"
        value={id}
        onChangeText={setId}
        style={styles.input}
      />
      <Text>条形码：</Text>
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          placeholder="请输入条形码"
          value={barcode}
          onChangeText={setBarcode}
          style={[styles.input, { flex: 1 }]}
        />
        <Button title="扫码" onPress={handleOpenCamera} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, gap: 16 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 4,
  },
});
