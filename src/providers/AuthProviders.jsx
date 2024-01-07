import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProviders = ({children}) => {
    const [user , setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const createUser = (email , password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }

    const logout = () => {
        return signOut(auth) ;
    }

    // observe auth state change
    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('auth state change', currentUser);
            setUser(currentUser) ;
            setLoading(false);
        }) ;
        return () => {
            unSubscribe();
        }
    }, [])

    const userInfo =  {
        user, 
        createUser, 
        loginUser, 
        logout, 
        loading
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;