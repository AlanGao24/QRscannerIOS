import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';
import type { RootStackParamList } from '../App';

export default function ScanScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList, 'Scan'>>();

  const [id, setId] = useState('');
  const [barcode, setBarcode] = useState('');

  // ✅ 每次进入页面或扫码完成后检查是否有传入 barcode 参数
  useEffect(() => {
    if (route.params?.barcode) {
      setBarcode(route.params.barcode);
    }
  }, [route.params?.barcode]);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="请输入商品 ID"
        keyboardType="numeric"
        value={id}
        onChangeText={setId}
        style={styles.input}
      />

      <View style={styles.row}>
        <Text style={styles.label}>条形码:</Text>
        <TextInput
          value={barcode}
          onChangeText={setBarcode}
          placeholder="请输入条形码"
          keyboardType="numeric"
          style={[styles.input, { flex: 1 }]}
        />
        <Button title="扫码" onPress={() => navigation.navigate('Camera')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  label: {
    fontSize: 16,
    width: 60,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 4,
    fontSize: 16,
  },
});