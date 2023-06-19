import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAdmin from "../../Hookes/useAdmin";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../Pages/Loading/Loading";


const AdminRouter = ({children}) => {
    const{user, loading} = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)
    const location = useLocation();

    if(loading || isAdminLoading){
        return <Loading></Loading>
    }
    if(user && isAdmin){
        return children
    }
    return (
       <Navigate to='/login' state={{from: location}} replace></Navigate>
    );
};

export default AdminRouter;