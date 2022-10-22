import {NavigationContainer} from '@react-navigation/native';
import AppIndex from './src/navigation/AppIndex';
import {ListContext} from './src/context/ListContext';
export default function App() {
  return (
    <NavigationContainer>
      <ListContext>
        <AppIndex />
      </ListContext>
    </NavigationContainer>
  );
}
