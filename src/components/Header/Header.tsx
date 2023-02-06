import React, { FC, ReactElement } from 'react'
import { StyleSheet } from 'react-native'
import Constants from 'expo-constants';
import { Text, View } from '../Themed';
import useColorScheme from 'src/hooks/useColorScheme';

type HeaderProps = {
    navigation?: any;
    children?: React.ReactNode | ReactElement;
}

const Header = (props: HeaderProps) => {
    const colorScheme = useColorScheme();
    const {children, navigation} = props;

    const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
    const themeContainerStyle = colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

    return (
        <View style = {[styles.header, themeContainerStyle]}>
            {children}
        </View>
    );
};


const styles = StyleSheet.create({
    header: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        zIndex: 2,
    },
    text: {
        fontSize: 18,
        fontWeight: '900',
    },
    button: {

    },
    lightContainer: {
        backgroundColor: '#fff',
    },
    darkContainer: {
        backgroundColor: '#242c40',
    },
    lightThemeText: {
        color: '#242c40',
    },
    darkThemeText: {
        color: '#d0d0c0',
    },
});

export default Header