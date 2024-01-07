import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <button className="btn btn-square">
        <span className="loading loading-spinner"></span>
      </button>
    }
    
    if(user) {
        return children ;
    }
   
    return <Navigate to='/login' replace={true}></Navigate> ;
};

export default PrivateRoute;