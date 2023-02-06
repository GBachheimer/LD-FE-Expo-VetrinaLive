import { View } from "src/components/Themed";
import React, { useState } from "react";
import Header from "src/components/Header/Header";
import CompanyText from "src/components/CompanyText";
import FormTemplate from "src/components/FormTemplate/FormTemplate";
import { TextInput, NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { ForgotPasswordScreenProps } from "src/types";
import { styles } from "./ForgotPassword.style";
import { handleResetPass } from "src/api/auth/handleResetPass";

const ForgotPassword = (props: ForgotPasswordScreenProps) => {
    const [email, setEmail] = useState('');

    const  { navigation } = props;

    const handleEmail = (event: NativeSyntheticEvent<TextInputChangeEventData>): void => {
        setEmail(event.nativeEvent.text)
    };

    return (
		<View style = {styles.container}>
            <Header navigation = {navigation}>
                <CompanyText/>
            </Header>
            <View style = {styles.body}>
                <FormTemplate 
                    navigation = {navigation}
                    title = 'Forgot Password'
                    subtitle = "Enter your email and you'll receive an email to recover ypur password."
                    submitText = 'Send email'
                    submitAction = {() => handleResetPass(email, navigation)}
                    divider = {false}
                    extraOptions = {false}
                    footerText1 = "Do you have an account?"
                    footerLink = 'Sign in now'
                    footerAction = {() => navigation.navigate('Login')}
                >
                    <TextInput 
                        style = {styles.textInput} 
                        placeholder = 'Email'
                        value = {email}
                        onChange = {handleEmail}
                    />
                </FormTemplate>
            </View>
		</View>
    );
};

export default ForgotPassword