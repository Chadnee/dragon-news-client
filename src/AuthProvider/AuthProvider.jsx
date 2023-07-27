import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
     
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const updateUserData = ( name) =>{
     return updateProfile(user,name)
    }

    const resetPasswordemail = (email) =>{
        return sendPasswordResetEmail(auth, email)
    }

    const emailVerification = () =>{
      return sendEmailVerification(auth.currentUser)
    }

    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        console.log('auth state has changed', currentUser)
        setUser(currentUser)
    })
    return() => {
        unsubscribe();
    }
    })

    const logOut = () => {
        return signOut(auth)
    }

    const getInfo = {
         user,
         signIn,
         googleLogin,
         signUp,
         logOut,
         updateUserData,
         resetPasswordemail,
         emailVerification
    }
    return (
       <AuthContext.Provider value = {getInfo}>
          {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;