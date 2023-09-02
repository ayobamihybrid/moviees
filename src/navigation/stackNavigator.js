import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreen from '../screens/Homescreen';
import ProfileScreen from '../screens/ProfileScreen';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import CitiesScreen from '../screens/CitiesScreen';
import TheaterScreen from '../screens/TheaterScreen';
import MovieScreen from '../screens/MovieScreen';
import FoodScreen from '../screens/FoodScreen';
import ConfirmationScreen from '../screens/ConfirmationScreen';
import TicketScreen from '../screens/TicketScreen';

const HomeStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={Homescreen}
        options={{ title: 'Moviees' }}
      />
      <HomeStack.Screen
        name="CitiesScreen"
        component={CitiesScreen}
        options={{ title: '' }}
      />
      <HomeStack.Screen
        name="MovieScreen"
        component={MovieScreen}
        options={{ title: '' }}
      />
      <HomeStack.Screen
        name="TheaterScreen"
        component={TheaterScreen}
        options={{ title: '' }}
      />
      <HomeStack.Screen
        name="FoodScreen"
        component={FoodScreen}
        options={{ title: '' }}
      />
      <HomeStack.Screen
        name="ConfirmationScreen"
        component={ConfirmationScreen}
        options={{ title: '' }}
      />
      <HomeStack.Screen
        name="TicketScreen"
        component={TicketScreen}
        options={{ title: '' }}
      />
    </HomeStack.Navigator>
  );
}

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ title: '' }}
      />
    </ProfileStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function BottomNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarLabelStyle: { color: 'black' },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" size={26} color="black" />
              ) : (
                <AntDesign name="home" size={22} color="black" />
              ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileStackScreen}
          options={{
            tabBarLabelStyle: { color: 'black' },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="person" size={28} color="black" />
              ) : (
                <Ionicons name="person-outline" size={22} color="black" />
              ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomNavigation;
