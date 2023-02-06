import { StyleSheet } from 'react-native';
import { Text, View } from 'src/components/Themed';
import React, { FC } from "react";
import FormTemplate from 'src/components/FormTemplate/FormTemplate';
import CompanyText from 'src/components/CompanyText';
import Header from 'src/components/Header/Header';
import { SignUpScreenProps } from 'src/types';
import { TextInput } from 'react-native';

const SignUp = (props: SignUpScreenProps): JSX.Element => {
    const  { navigation } = props;
    const handleSignup = () => {
        alert('signup')
    }

	return (
		<View style = {styles.container}>
            <Header navigation = {navigation}>
                <CompanyText/>
            </Header>
            <View style = {styles.body}>
                <FormTemplate 
                    navigation = {navigation}
                    title = 'Create your e-commerce'
                    subtitle = 'Try Vetrina Live for free in the next 7 days. Open a shop in few minutes! No credit card required.'
                    submitText = 'Create your shop'
                    submitAction = {handleSignup}
                    divider = {true}
                    extraOptions = {true}
                    footerText1 = 'Do you have an account?'
                    footerLink = 'Sign in now'
                >
                    <TextInput style = {styles.textInput} placeholder = 'Name and Surname'/>
                    <TextInput style = {styles.textInput} placeholder = 'Email'/>
                    <TextInput style = {styles.textInput} placeholder = 'Password'/>
                </FormTemplate>
            </View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
    title: {

    },
    body: {
        flex: 9,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: '10%',
        paddingRight: '10%',
    },
    textInput: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#0A254052',
        borderRadius: 8,
        height: 48,
        padding: 10,
        marginTop: 10,
    },
});

export default SignUp
