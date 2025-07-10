// App.tsx
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import InScreen from './screens/InScreen';
import OutScreen from './screens/OutScreen';
import ScanScreen from './screens/ScanScreen';
import CameraScreen from './screens/CameraScreen';

export type RootStackParamList = {
  Home: undefined;
  In: undefined;
  Out: undefined;
  Scan: undefined;
  Camera: { onScanned: (barcode: string) => void };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="In" component={InScreen} />
        <Stack.Screen name="Out" component={OutScreen} />
        <Stack.Screen name="Scan" component={ScanScreen} />
        <Stack.Screen name="Camera" component={CameraScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}