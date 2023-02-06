import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation/Navigation';
import 'react-native-gesture-handler';
import { AuthProvider } from 'src/context/AuthContext';

export default function App() {
	const isLoadingComplete = useCachedResources();
	const colorScheme = useColorScheme();

	if (!isLoadingComplete) {
		return null;
	} else {
		return (
			<SafeAreaProvider>
				<AuthProvider>
					<Navigation colorScheme = {colorScheme} />
				</AuthProvider>
				<StatusBar />
			</SafeAreaProvider>
		);
	}
}
