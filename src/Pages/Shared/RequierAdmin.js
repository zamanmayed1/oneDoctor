import React from 'react';
import auth from '../../Firebase/Fireabse.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../Hooks/useAdmin';
import { signOut } from 'firebase/auth';


function RequierAdmin({ children }) {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    let location = useLocation();

    if (!admin) {
        signOut(auth)
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return children;
}

export default RequierAdmin;