// import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const useSignUp = () => {
    const [
      createUserWithEmailAndPassword,
      emailSignUpUser,
      emailSignUpLoading,
      emailSignUpError,
    ] = useCreateUserWithEmailAndPassword(auth, {
      sendEmailVerification: true,
    });
    return [
      createUserWithEmailAndPassword,
      emailSignUpUser,
      emailSignUpLoading,
      emailSignUpError,
    ];
};

export default useSignUp;