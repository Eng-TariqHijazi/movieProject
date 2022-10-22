/* eslint-disable react/react-in-jsx-scope */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Favourite, Home} from '../screens';
const Tab = createBottomTabNavigator();
export default function BottomStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 80,
          borderTopEndRadius: 40,
          borderTopStartRadius: 40,
        },
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="home"
              size={30}
              color={focused ? 'black' : '#00000050'}
            />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="heart"
              size={30}
              color={focused ? 'red' : '#00000050'}
            />
          ),
        }}
        name="Favourite"
        component={Favourite}
      />
    </Tab.Navigator>
  );
}
