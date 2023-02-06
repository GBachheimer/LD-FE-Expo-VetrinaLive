import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { Text } from 'src/components/Themed'
import { Feather } from '@expo/vector-icons'

const Support = () => {
  return (
    <TouchableOpacity style = {styles.support}>
        <Feather name = 'headphones' size = {24} color = 'black' style = {styles.supportImg} />
        <Text style = {styles.supportText}>Support</Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
    support: {
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#00C48C',
        marginTop: 20,
        width: 120,
        height: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    supportText: {
        color: '#103B66',
        fontWeight: 'bold',
        fontSize: 14,
    },
    supportImg: {
        marginRight: 10,
    }
});

export default Support