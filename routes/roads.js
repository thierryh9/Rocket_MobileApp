  
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from '@react-navigation/native';
import StartUpScreen  from '../screens/StartUpScreen';
import HomeScreen from '../screens/HomeScreen';
import ElevatorScreen from '../screens/ElevatorScreen';

const screens = {
    StartUpPage: {
        screen: StartUpScreen
    },
    HomeScreen: {
        screen: HomeScreen
    },
    ElevatorScreen: {
        screen: ElevatorScreen
    }
}

const roads = createStackNavigator(screens);

export default createAppContainer(roads);