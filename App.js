import  React,{useEffect} from 'react';
import { StatusBar } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Home';
import Constants from './src/Constants';
import Icon from 'react-native-vector-icons/Ionicons';
import MovieDetails from './src/Components/MovieDetails';
import { LogBox } from 'react-native';
const Stack = createNativeStackNavigator();
function App() {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
}, [])
  return (
    <>
    <StatusBar  barStyle="light-content" backgroundColor={Constants.baseColor}/>
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Home" component={Home} options={headerStyle} />
        <Stack.Screen
          name="movieDetails"
          component={MovieDetails}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const headerStyle = {
  title: 'Movies',
  headerStyle: {backgroundColor: Constants.baseColor},
  headerTitleStyle: {color: Constants.textColor},
  headerRight: () => (
    <Icon name="search" size={25} color={Constants.textColor} />
  ),
};
export default App;
