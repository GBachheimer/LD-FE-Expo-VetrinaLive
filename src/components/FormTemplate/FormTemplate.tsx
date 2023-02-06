import React from 'react'
import { Text, View } from 'src/components/Themed';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
import { Divider } from '@rneui/themed';

const FormTemplate = () => {
    return (
    <>
        <Text style = {styles.title}>Title</Text>
    </>
    );
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
	},
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    subtitle: {

    },
    submit: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#21B8F9',
        borderRadius: 8,
        marginTop: 10,
        width: '100%',
        height: 48,
    },
    submitText: {
        color: 'white'
    },
    submitText2: {
        color: 'black'
    },
    surname: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#0A254052',
        borderRadius: 8,
        height: 48,
        padding: 10,
        marginTop: 10,
    },
    separator: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    divider: {
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
        width: '40%',
    },
    dividerMarginR: {
        marginRight: '5%',
    },
    dividerMarginL: {
        marginLeft: '5%',
    },
    extraSubmit: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#21B8F9',
        borderRadius: 8,
        marginTop: 10,
        width: '100%',
        height: 48,
    },
});

export default FormTemplate