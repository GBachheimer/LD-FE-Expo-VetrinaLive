import React from 'react'
import { View, Text } from 'src/components/Themed'
import { StyleSheet } from 'react-native';

const Divider = () => {
    return (
        <View style = {styles.separator}>
            <View style = {[styles.divider, styles.dividerMarginR]}/>
            <Text>OR</Text>
            <View style = {[styles.divider, styles.dividerMarginL]}/>
        </View>
    )
};

const styles = StyleSheet.create({
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
});

export default Divider