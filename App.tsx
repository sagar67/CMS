import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './Component/HomeScreen';
import {Text, View} from 'react-native';
import IconSelector, {ICON_TYPE} from './Component/common/IconSelect';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const CustomTabBarIcon = ({focused, iconName, label}) => (
  <View style={{alignItems: 'center', flexDirection:'column' , justifyContent:'space-evenly',}}>
    <IconSelector
      type={ICON_TYPE.Ionicons}
      name={iconName}
      size={20}
      color={focused ? '#6d2cff' : '#9a9a9a'}
    />
    {focused && <IconSelector
      type={ICON_TYPE.Entypo}
      name={"dot-single"}
      size={20}
      color={focused ? '#6d2cff' : '#9a9a9a'}
    />}
  </View>
);

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
        screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName;
          let label;

          switch (route.name) {
            case 'Home':
              iconName = 'home-sharp';
              label = 'Home';
              break;
            case 'Search':
              iconName = 'location-sharp';
              label = 'Search';
              break;
            case 'Play':
              iconName = 'settings-sharp';
              label = 'Play';
              break;
            case 'Profile':
              iconName = 'person-outline';
              label = 'Profile';
              break;
          }

          return (
            <CustomTabBarIcon
              focused={focused}
              iconName={iconName}
              label={label}
            />
          );
        },
        tabBarActiveTintColor: '#702df6',
        tabBarInactiveTintColor: 'black',
        tabBarStyle: {
          backgroundColor: '#fff',
          paddingBottom: 10,
          padding: 10,
          // elevation: 5,
          height:60,
          marginHorizontal: 16,
          marginBottom: 16,
          borderRadius: 12,
        },
        tabBarItemStyle: {
          padding: 8,
          borderRadius: 10,
          marginHorizontal: 15, 
        },
        // tabBarActiveBackgroundColor: '#FFE7EA',
        headerShown: false,
        tabBarLabel: () => null,
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        name="Search"
        component={HomeScreen}
        options={{title: 'Search'}}
      />
      <Tab.Screen
        name="Play"
        component={HomeScreen}
        options={{title: 'Play'}}
      />
    </Tab.Navigator>
  );
};

const MainScreen = () => (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <BottomTabNavigator />
        </View>
);

const DrawerNavigator = () => (
  <Drawer.Navigator
    screenOptions={{
      headerShown: false, 
    }}
  >
    <Drawer.Screen name="Main" component={MainScreen} options={{ title: 'Main' }} />
  </Drawer.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
