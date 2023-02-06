import React from 'react';
import { View, Text } from './Themed';
import { StyleSheet } from 'react-native';

const CompanyText = () => {
    return (
        <Text>
            <Text style = {styles.title1}>vetrina</Text>
            <Text style = {styles.title2}>live</Text>
        </Text>
    );
};

const styles = StyleSheet.create({
    title1: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    title2: {
        fontSize: 28,
        color: '#21B8F9',
        fontWeight: 'bold',
    },
});
export default CompanyText