import React from 'react'
import { Text, View } from 'src/components/Themed';
import { TouchableOpacity } from 'react-native';
import Divider from './components/Divider';
import FormHeader from './components/FormHeader';
import ExtraOptions from './components/ExtraOptions';
import Support from './components/Support';
import { FormTemplateProps } from './types';
import { styles } from './FormTemplate.style';

const FormTemplate = (props: FormTemplateProps) => {
    const { navigation, children, submitText, submitAction, divider, footerText1, footerText2, footerLink, extraOptions, title, subtitle, footerAction } = props;

    return (
        <>
            <FormHeader title = {title} subtitle = {subtitle}/>
            {children}
            {submitAction && <TouchableOpacity style = {styles.submit} onPress = {submitAction}>
                <Text style = {styles.submitText}>{submitText}</Text>
            </TouchableOpacity>}
            {divider && <Divider />}
            {extraOptions && <ExtraOptions />}
            { footerText2 && <TouchableOpacity onPress = {() => navigation.navigate('ForgotPassword')}>
                <Text style = {styles.resetPass}>{footerText1}</Text>
            </TouchableOpacity> }
            {footerLink && <View style = {styles.formFooter}>
                { footerText2 ? <Text>{footerText2} </Text> : footerText1 ? <Text>{footerText1} </Text> : null }
                <TouchableOpacity onPress = {footerAction}>
                    <Text style = {styles.redirect}>{footerLink}</Text>
                </TouchableOpacity>
            </View>}
            <Support />
        </>
    );
};

export default FormTemplate