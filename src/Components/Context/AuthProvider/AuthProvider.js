import { createContext, useEffect, useState } from "react";
import {getAuth, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth';
import app from "../../FirebaseAuthentication/FirebaseAuthentication";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);

    const signInWithGoogle = (provider)=>{
        return signInWithPopup(auth, provider);
    };

    const signInWithGithub = (provider)=>{
        return signInWithPopup(auth, provider);
    }

    const logOut = ()=>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log('user inside state change', currentUser);
            if(currentUser == null || currentUser.emailVerified){
                setUser(currentUser)
    }})
        return ()=>{
            unsubscribe()
        }
        
    })

    const authInfo = {user, signInWithGoogle, signInWithGithub, logOut}

    return (<AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>);
    };

export default AuthProvider;