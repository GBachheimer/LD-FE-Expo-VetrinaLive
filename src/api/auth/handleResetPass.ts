import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from 'src/config/firebase';

export const handleResetPass = (email: string, navigation: any) => {
    sendPasswordResetEmail(auth, email)
    .then(() => {
        navigation.navigate('Login');
        alert('Email sent!');
    })
    .catch((error) => {
        const errorCode = error.code;
        alert('Something went wrong!');
        if(errorCode === 'auth/missing-email' || errorCode === 'auth/invalid-email' || errorCode === 'auth/user-not-found') {
            alert('Please provide a valid email address!');
        };
    });
};