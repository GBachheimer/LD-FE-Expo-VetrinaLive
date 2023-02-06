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
    const { navigation, children, submitText, submitAction, divider, footerText1, footerText2, footerLink, extraOptions, title, subtitle } = props;

    return (
        <>
            <FormHeader title = {title} subtitle = {subtitle}/>
            {children}
            {submitAction && <TouchableOpacity style = {styles.submit} onPress = {submitAction}>
                <Text style = {styles.submitText}>{submitText}</Text>
            </TouchableOpacity>}
            {divider && <Divider />}
            {extraOptions && <ExtraOptions />}
            {footerLink && <View style = {styles.formFooter}>
                { footerText1 ? <Text>{footerText1} </Text> : null }
                { footerText2 ? <Text>{footerText2} </Text> : null }
                <TouchableOpacity onPress = {() => navigation.navigate('Login')}>
                    <Text style = {styles.redirect}>{footerLink}</Text>
                </TouchableOpacity>
            </View>}
            <Support />
        </>
    );
};

export default FormTemplate