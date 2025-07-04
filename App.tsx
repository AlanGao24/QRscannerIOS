import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import ScanScreen from './screens/ScanScreen';
import InScreen from './screens/InScreen';
import OutScreen from './screens/OutScreen';
import CameraScreen from './screens/CameraScreen';

// 🟡 定义导航中各个页面的类型（无参数就写 undefined）
export type RootStackParamList = {
  Home: undefined;
  Scan: { barcode?: string };
  In: undefined;
  Out: undefined;
  Camera: undefined;
};

// 🔵 创建导航栈，传入类型
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Scan" component={ScanScreen} />
        <Stack.Screen name="In" component={InScreen} />
        <Stack.Screen name="Out" component={OutScreen} />
        <Stack.Screen name="Camera" component={CameraScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
