import { View, Text } from "src/components/Themed";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

type LoginProps = {
    navigation: any
}

const Login = (props: LoginProps) => {
    const  { navigation } = props;

    return (
        <View style = {styles.container}>
            <Text>Login</Text>
            <TouchableOpacity onPress = {() => navigation.navigate('SignUp')}>
                <Text>back to signup</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default Login