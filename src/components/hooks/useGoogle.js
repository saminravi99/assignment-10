// import React from 'react';
import {useSignInWithGoogle} from "react-firebase-hooks/auth";
import auth from '../firebase.init';

const useGoogle = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    return [signInWithGoogle, googleUser, googleLoading, googleError];

};

export default useGoogle;