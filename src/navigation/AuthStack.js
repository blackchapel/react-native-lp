import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppStack from './AppStack';
import LoginScreen from '../screens/LoginScreen';
import OnboardScreen from '../screens/OnboardScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SendOtpScreen from '../screens/SendOtpScreen';
import OtpVerificationScreen from '../screens/OtpVerificationScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen component={OnboardScreen} name="Onboard" /> */}
      <Stack.Screen component={LoginScreen} name="Login" />
      <Stack.Screen component={SendOtpScreen} name="SendOtp" />
      <Stack.Screen component={OtpVerificationScreen} name="OtpVerify" />
      <Stack.Screen component={ResetPasswordScreen} name="ResetPassword" />
      <Stack.Screen component={AppStack} name="AppStack" />
      <Stack.Screen component={RegisterScreen} name="Register" />
    </Stack.Navigator>
  );
};

export default AuthStack;
