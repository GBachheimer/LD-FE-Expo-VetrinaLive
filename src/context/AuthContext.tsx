import { onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useState } from 'react'
import { auth } from 'src/config/firebase';

type authContextType = {
    user?: boolean;
};

type Props = {
    children: React.ReactNode,
};

export const AuthContext = createContext<authContextType>({user: false});

export const AuthProvider = ({children}: Props) => {
    const [user, setUser] = useState<boolean>();

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(true);
        } else {
            setUser(false);
        }
    });

    return (
        <AuthContext.Provider value = {{user}}>
            {children}
        </AuthContext.Provider>
    );
};