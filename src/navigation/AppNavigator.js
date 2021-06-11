import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FormScreen, SubmissionsScreen} from '../screens';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#0cdc5a',
          inactiveTintColor: '#3D3A62',
          labelStyle: {
            fontSize: 15,
            fontWeight: '500',
          },
        }}>
        <Tab.Screen name="Taxdown" component={FormScreen} />
        <Tab.Screen name="Submissions" component={SubmissionsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
