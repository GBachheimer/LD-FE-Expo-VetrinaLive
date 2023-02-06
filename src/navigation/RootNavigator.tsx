import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import Login from 'src/screens/Login/Login';
import SignUp from 'src/screens/SignUp/SignUp';
import ForgotPassword from 'src/screens/ForgotPassword/ForgotPassword';
import Dashboard from 'src/screens/Dashboard/Dashboard';
import Product from 'src/screens/Product';
import Payments from 'src/screens/Payments';
import Plan from 'src/screens/Plan';
import Admin from 'src/screens/Admin';
import NotFoundScreen from 'src/screens/NotFoundScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
	return (
		<Stack.Navigator>
            <Stack.Screen name = 'SignUp' component = {SignUp} options = {{ headerShown: false}} />
            <Stack.Screen name = 'Login' component = {Login} options = {{ headerShown: false}} />
            <Stack.Screen name = 'ForgotPassword' component = {ForgotPassword} options = {{ headerShown: false}} />
            {/* <Stack.Screen name = 'Dashboard' component = {Dashboard} options = {{ headerShown: false}} />
            <Stack.Screen name = 'Product' component = {Product} options = {{ headerShown: false}} />
            <Stack.Screen name = 'Payments' component = {Payments} options = {{ headerShown: false}} />
            <Stack.Screen name = 'Admin' component = {Admin} options = {{ headerShown: false}} />
            <Stack.Screen name = 'Plan' component = {Plan} options = {{ headerShown: false}} />
			<Stack.Screen name = 'NotFound' component = {NotFoundScreen} options = {{ headerShown: false}} /> */}
		</Stack.Navigator>
	);
};

export default RootNavigator