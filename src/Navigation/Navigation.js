import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from '../Containers/Login/LoginPage';
import RegisterPage from '../Containers/Register/RegisterPage';
import Dashboard from '../Containers/Dashboard/Dashboard';
import ResetPassword from '../Containers/Login/ResetPassword';
import TransparentHeader from './Headers/TransparentHeader';
import OtpScreen from '../Containers/OTPScreen/otpScreen';
import HomePage from '../Containers/Homepage/HomePage';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen 
          name="RegisterPage" 
          component={RegisterPage} 
          options={{
            headerShown:true,
            headerTransparent : true,
            header: ()=> <TransparentHeader
              title={'REGISTER'}
            />
          }}
        />

        <Stack.Screen 
          name="ResetPassword" 
          component={ResetPassword} 
          options={{
            headerShown:false
          }}
        />

        <Stack.Screen 
          name="Dashboard" 
          component={Dashboard} 
          options={{
            headerShown:false
          }}
        />
        
        <Stack.Screen 
          name="OtpScreen" 
          component={OtpScreen} 
          options={{
            headerShown:false
          }}
        />

        <Stack.Screen 
          name="HomePage" 
          component={HomePage} 
          options={{
            headerShown:false
          }}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
