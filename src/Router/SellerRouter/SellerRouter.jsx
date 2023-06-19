import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useSaller from "../../Hookes/useSaller";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../Pages/Loading/Loading";


const SellerRouter = ({children}) => {
    const{user, loading} = useContext(AuthContext);
const [isSeller, isSellerLoading] = useSaller(user?.email)
const location = useLocation();
if(loading || isSellerLoading){
    return <Loading></Loading>
}
if(user && isSeller){
    return children
}
return (
   <Navigate to='/login' state={{from: location}} replace></Navigate>
);
}
export default SellerRouter;


