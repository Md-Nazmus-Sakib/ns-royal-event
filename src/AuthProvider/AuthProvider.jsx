import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';

import AOS from "aos";
import "aos/dist/aos.css";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();

    }, []);

    setTimeout(() => { AOS.refresh(); }, 500);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        });
        return () => {
            unsubscribe();
        }

    }, [])


    const authInfo = {
        user,
        loading,
        setLoading,
        createUser,
        signIn,
        logOut,
        updateUserProfile,
        googleSignIn

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;