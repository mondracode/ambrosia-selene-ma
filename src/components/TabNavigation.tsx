import React, {useContext} from 'react';
import RemixIcon from 'react-native-remix-icon';
import Plan from '../screens/Plan';
import Registry from '../screens/Registry';
import Home from '../screens/Home';
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
            <Tab.Screen name="Pendientes" component={Plan} />
            <Tab.Screen name="Historia" component={Registry} />
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Cursos" component={Courses} />
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
    case 'Login':
      pageIcon = 'ri-shield-keyhole-line';
      break;
  }
  return pageIcon;
};

export default TabNavigation;
