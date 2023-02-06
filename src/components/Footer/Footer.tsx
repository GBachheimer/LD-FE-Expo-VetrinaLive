import React, { FC } from 'react'
import { View, Text } from '../Themed';
import { StyleSheet } from 'react-native'
import useColorScheme from 'src/hooks/useColorScheme';

const Footer: FC = () => {
    const colorScheme = useColorScheme();

    const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
    const themeContainerStyle = colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

    return (
        <View style = {[styles.footer, themeContainerStyle]}>
            <Text style = {[styles.text, themeTextStyle]}>Title</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        zIndex: 2,
        // borderTopWidth: 1,
        // borderTopColor: '#14141420',
    },
    text: {
        fontSize: 18,
        fontWeight: '900',
    },
    icon: {
        marginBottom: 10,
    }, 
    button: {

    },
    lightContainer: {
        backgroundColor: '#d0d0c0',
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

export default Footer