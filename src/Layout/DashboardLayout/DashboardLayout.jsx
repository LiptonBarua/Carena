import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAdmin from "../../Hookes/useAdmin";
import useSaller from "../../Hookes/useSaller";
import useBuyer from "../../Hookes/useBuyer";
import { useQuery } from "@tanstack/react-query";
import Header from '../../Pages/Share/Header/Header';



const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSaller(user?.email);
  const [isBuyer] = useBuyer(user?.email);


  const { data: sellectData = [] } = useQuery({
    queryKey: ['sellectDatabase'],
    queryFn: async () => {
      const res = await fetch(`https://server12.vercel.app/users/${user?.email}`)
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
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn pt-36 btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  
  </div>
</div>
        </div>
    </div>
    
  );
};

export default DashboardLayout;