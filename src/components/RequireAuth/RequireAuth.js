import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Loading from '../Loading/Loading';

const RequireAuth = ({children}) => {

    let location = useLocation();


    const [authUser, authLoading] = useAuth();




    if(authLoading){
        return <Loading></Loading>
    }

   

    if (!authUser) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;

};

export default RequireAuth;