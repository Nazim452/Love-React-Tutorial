import React from 'react'
import { Navigate } from 'react-router-dom';

// child of isLoggedIn come automatically - means dashbord comme automatically in PrivateRoute

const PrivateRoute = ({isLoggedIn, children}) => {
    if(isLoggedIn){
        return children;

    }
    else{
        return <Navigate to ="/login"/>
    }
  
}

export default PrivateRoute
