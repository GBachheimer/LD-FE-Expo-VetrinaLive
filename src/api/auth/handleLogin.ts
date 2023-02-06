import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "src/config/firebase";

export const handleLogin = (email: string, password: string, navigation: any): void => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        navigation.navigate('Dashboard');
    })
    .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        switch (errorCode) {
            case 'auth/missing-email':
                alert('Please provide an email!');
                break;
            case 'auth/wrong-password':
                alert('Wrong password!');
                break;
            case 'auth/invalid-email':
                alert('Wrong email address!');
                break;
            case 'auth/internal-error':
                alert('Please provide a valid email or password!');
                break;
            case 'auth/user-not-found':
                alert('This account doesn\'t exists!');
                break;
            default: 
                alert('There was a problem, please try again!');
        };
    });
};