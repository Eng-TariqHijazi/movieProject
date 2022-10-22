/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomStack from './BottomStack.js';
const Stack = createNativeStackNavigator();
export default function AppIndex() {
  return (
    <Stack.Navigator initialRouteName="BottomStack">
      <Stack.Screen
        options={{headerShown: false}}
        name="BottomStack"
        component={BottomStack}
      />
    </Stack.Navigator>
  );
}
{
}
