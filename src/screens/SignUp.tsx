import { StyleSheet } from 'react-native';
import { Text, View } from 'src/components/Themed';
import React, { FC } from "react";
import FormTemplate from 'src/components/FormTemplate/FormTemplate';
import CompanyText from 'src/components/CompanyText';
import Header from 'src/components/Header/Header';
import { SignUpScreenProps } from 'src/types';
import Footer from 'src/components/Footer/Footer';

const SignUp = (props: SignUpScreenProps): JSX.Element => {
    const  { navigation } = props;

	return (
		<View style = {styles.container}>
            <Header navigation = {navigation}>
                <CompanyText/>
            </Header>
            <View style = {styles.body}>
                <FormTemplate />
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
        padding: '10%',
    },
    text: {

    },
});

export default SignUp
