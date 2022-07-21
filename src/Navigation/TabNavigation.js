import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../Containers/Homepage/HomePage';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="HomePage" 
                component={HomePage} 
            />

            <Tab.Screen 
                name="HomePage1" 
                component={HomePage} 
            />

            <Tab.Screen 
                name="HomePage2" 
                component={HomePage} 
            />

            <Tab.Screen 
                name="HomePage3" 
                component={HomePage} 
            />

            <Tab.Screen 
                name="HomePage4" 
                component={HomePage} 
            />
        </Tab.Navigator>
    );
  }