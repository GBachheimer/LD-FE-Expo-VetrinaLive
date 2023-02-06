import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import { Text } from 'src/components/Themed'

const ExtraOptions = () => {
  return (
    <>
        <TouchableOpacity style = {styles.extraSubmit}>
            <Image source = {require('src/assets/images/Vector.png')} style = {styles.img}/>
            <Text style = {styles.submitText2}> Sign up with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.extraSubmit}>
            <Image source = {require('src/assets/images/google-login.png')} style = {styles.img}/>
            <Text style = {styles.submitText2}> Sign up with Google</Text>
        </TouchableOpacity>
    </>
  )
};

const styles = StyleSheet.create({
    submitText2: {
        color: 'black'
    },
    extraSubmit: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#21B8F9',
        backgroundColor: 'white',
        borderRadius: 8,
        width: '100%',
        height: 48,
        marginTop: 20,
    },
    img: {
        marginRight: 10,
    },
});

export default ExtraOptions