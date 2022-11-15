import React, {useContext} from 'react';
import RemixIcon from 'react-native-remix-icon';
import Registry from '../screens/Registry';
import Courses from '../screens/Courses';
import Menu from '../screens/Menu';
import Login from '../screens/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AuthContext, AuthContextType} from '../context/AuthContext';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const {auth, saveAuth} = useContext(AuthContext) as AuthContextType;

  return (
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
        {auth.token ? (
          <>
            <Tab.Screen name="Historia" component={Registry} />
            <Tab.Screen name="Horario" component={Courses} />
            <Tab.Screen
              name="Menú"
              children={props => (
                <Menu auth={auth} saveAuth={saveAuth} {...props} />
              )}
            />
          </>
        ) : (
          <Tab.Screen
            name="Login"
            children={props => <Login saveAuth={saveAuth} {...props} />}
          />
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const getPageIcon = (pageName: string): string => {
  let pageIcon = '';
  switch (pageName) {
    case 'Historia':
      pageIcon = 'ri-book-2-line';
      break;
    case 'Horario':
      pageIcon = 'ri-booklet-line';
      break;
    case 'Menú':
      pageIcon = 'ri-menu-5-line';
      break;
    case 'Login':
      pageIcon = 'ri-shield-keyhole-line';
      break;
  }
  return pageIcon;
};

export default TabNavigation;
