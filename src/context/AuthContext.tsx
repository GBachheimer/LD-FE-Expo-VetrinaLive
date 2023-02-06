import { onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useState } from 'react'
import { auth } from 'src/config/firebase';

type authContextType = {
    user: boolean;
};

type Props = {
    children: React.ReactNode,
};

const authContextDefaultValues: authContextType = {
    user: false,
};

export const AuthContext = createContext<authContextType>(authContextDefaultValues);

export const AuthProvider = ({children}: Props) => {
    const [user, setUser] = useState<boolean>(false);

    onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(true);
        } else {
          setUser(false)
        };
    });

    return (
        <AuthContext.Provider value = {{user}}>
            {children}
        </AuthContext.Provider>
    );
};