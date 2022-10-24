import React from 'react';
import {StatusBar} from 'react-native';

import Home from './src/screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Registry from './src/screens/Registry';
import Plan from './src/screens/Plan';
import Courses from './src/screens/Courses';
import Menu from './src/screens/Menu';
import RemixIcon from 'react-native-remix-icon';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({color}) => {
              return (
                <RemixIcon
                  name={getPageIcon(route.name)}
                  size={24}
                  color={color}
                />
              );
            },
            tabBarActiveTintColor: '#1c9888',
            tabBarInactiveTintColor: '#b9b9b9',
          })}>
          <Tab.Screen name="Pendientes" component={Plan} />
          <Tab.Screen name="Historia" component={Registry} />
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Cursos" component={Courses} />
          <Tab.Screen name="Menú" component={Menu} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

const getPageIcon = (pageName: string): string => {
  let pageIcon = '';
  switch (pageName) {
    case 'Pendientes':
      pageIcon = 'ri-checkbox-multiple-line';
      break;
    case 'Historia':
      pageIcon = 'ri-book-2-line';
      break;
    case 'Home':
      pageIcon = 'ri-home-3-fill';
      break;
    case 'Cursos':
      pageIcon = 'ri-booklet-line';
      break;
    case 'Menú':
      pageIcon = 'ri-menu-5-line';
      break;
  }
  return pageIcon;
};

export default App;
