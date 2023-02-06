import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from 'src/config/firebase';

export const handleSignup = (email: string, password: string, navigation: any): void => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
        navigation.navigate('Login');
        alert('Account created, please login!')
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + ' | ' + errorMessage);
        switch (errorCode) {
        case 'auth/invalid-email' || 'auth/missing-email':
            alert('Please provide a valid email address!');
            break;
        case 'auth/email-already-in-use':
            alert('This email is already assigned to another account. If you are the owner please login!');
            break;
        case 'auth/weak-password':
            alert('Please provide a strong password!');
            break;
        case 'auth/internal-error':
            alert('Please provide a password!');
            break;
        default:
            alert('There was a problem, please try again!');
        }
    });
};