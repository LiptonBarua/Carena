import { useQuery } from '@tanstack/react-query';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useAdmin from '../../Hookes/useAdmin';
import useBuyer from '../../Hookes/useBuyer';
import useSaller from '../../Hookes/useSaller';
import { useContext } from 'react';
import Header from '../../Pages/Share/Header/Header';



const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSaller(user?.email);
  const [isBuyer] = useBuyer(user?.email);


  const { data: sellectData = [] } = useQuery({
    queryKey: ['sellectDatabase'],
    queryFn: async () => {
      const res = await fetch(`http://localhost:8000/users/${user?.email}`)
      const data = await res.json()
      return data;
    }
  })

  return (
    <div>
       <Header></Header>
<div>
     
<div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content my-24 pl-6">
          <Outlet></Outlet>
        </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="bg-[#d01818] text-white text-lg ont menu pt-24 w-44 lg:w-72 h-full text-base-content">
    {
              isBuyer &&  (<li><Link to='/dashboard'>My Orders</Link></li>
            )}
            {
              isAdmin && (<>

              <li><Link to='/dashboard/allSeller'>All Users</Link></li>
               
              </>
            )}
            {
              isSeller && (<>
                <li><Link to='/dashboard/addProduct'>Add Product</Link></li>
                <li><Link to='/dashboard/myProducts'>Products</Link></li>
              </>
            )}

    </ul>
  
  </div>
</div>
    </div>
    </div>
    
  );
};

export default DashboardLayout;