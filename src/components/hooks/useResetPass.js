// import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const useResetPass = () => {
    const [sendPasswordResetEmail, resetEmailSending, resetError] =
      useSendPasswordResetEmail(auth);
    return [sendPasswordResetEmail, resetEmailSending, resetError];
};

export default useResetPass;