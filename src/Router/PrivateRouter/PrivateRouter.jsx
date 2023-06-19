
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../Pages/Loading/Loading';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const PrivateRouter = ({children}) => {
    const{user, loading} = useContext(AuthContext);
    const location= useLocation();

    if(loading){
        return <Loading></Loading>
    }

    if(user){
        return children
    }
    return (
       <Navigate to='/login' state={{from: location}} replace></Navigate>
    );
};

export default PrivateRouter;