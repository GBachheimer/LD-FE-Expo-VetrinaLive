import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import React from 'react';
import { ColorSchemeName } from 'react-native';
import RootNavigator from './RootNavigator'

const Navigation = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
	return (
		<NavigationContainer theme = {colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
			<RootNavigator />
		</NavigationContainer>
	);
};

export default Navigation