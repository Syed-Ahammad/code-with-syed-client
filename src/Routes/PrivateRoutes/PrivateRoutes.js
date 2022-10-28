import React, {useContext} from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Components/Context/AuthProvider/AuthProvider';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return 
        <svg class="animate-bounce w-6 h-6">
      
      </svg>
    }
   
    if(!user){
        return <Navigate to={'/login'} state={{from: location}} replace></Navigate>
    }
  

        return children;
    
};

export default PrivateRoutes;