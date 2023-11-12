import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Screen1 from './component/Screen1';
import Screen2 from './component/Screen2';
import Screen3 from './component/Screen3';
import Screen4 from './component/Screen4';
export default function App() {
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Screen1} name='Screen1' />
        <Stack.Screen component={Screen2} name='Screen2' />
        <Stack.Screen component={Screen3} name='Screen3' />
        <Stack.Screen component={Screen4} name='Screen4' />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
