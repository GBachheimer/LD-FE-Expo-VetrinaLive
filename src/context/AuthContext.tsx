import { onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useState, useEffect } from 'react'
// import { auth } from 'src/config/firebase';
import auth from '@react-native-firebase/auth';

type authContextType = {
    user?: boolean;
};

type Props = {
    children: React.ReactNode,
};

export const AuthContext = createContext<authContextType>({user: false});

export const AuthProvider = ({children}: Props) => {
    // const [user, setUser] = useState<boolean>();

    // onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //         setUser(true);
    //     } else {
    //         setUser(false);
    //     }
    // });

    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    function onAuthStateChanged(user: any) {
      setUser(user);
      if (initializing) setInitializing(false);
    }
  
    useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber; // unsubscribe on unmount
    }, []);
  
    if (initializing) return null;

    return (
        <AuthContext.Provider value = {{user}}>
            {children}
        </AuthContext.Provider>
    );
};