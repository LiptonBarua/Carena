import { useQuery } from '@tanstack/react-query';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useAdmin from '../../Hookes/useAdmin';
import useBuyer from '../../Hookes/useBuyer';
import useSaller from '../../Hookes/useSaller';
import { useContext } from 'react';
import Header from '../../Pages/Share/Header/Header';
import { ShareContext } from '../../ShareProvider/ShareProvider';
import { HiGift, HiOutlineUser, HiPlusCircle } from 'react-icons/hi';
import { FaBorderStyle } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { FiUsers } from 'react-icons/fi';





const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  // const { profile } = useContext(ShareContext)
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSaller(user?.email);
  const [isBuyer] = useBuyer(user?.email);
  const{profile}=useContext(ShareContext)


  // const { data: sellectData = [] } = useQuery({
  //   queryKey: ['sellectDatabase'],
  //   queryFn: async () => {
  //     const res = await fetch(`https://resele-server-side.vercel.app/users/${user?.email}`)
  //     const data = await res.json()
  //     return data;
  //   }
  // })

  return (
    <div>
      <Header></Header>
      <div>

        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content py-24">
            <Outlet></Outlet>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className=""></label>
            
            <ul className="bg-[#0a8803] text-white text-lg ont menu pt-28 w-52 lg:w-80 h-full">
            <div className="flex flex-col justify-center pb-6 max-w-xs rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100">
              {
                profile[0]?.image? <img src={profile[0]?.image} alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" /> : <img src="https://source.unsplash.com/150x150/?portrait?3" alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />

              }
              <div className="space-y-4 text-center divide-y divide-gray-700">
                <div className="my-2">
                  <h2 className="text-xl font-semibold sm:text-2xl">{profile[0]?.firstName} {profile[0]?.lastName}</h2>
                </div>

              </div>
            </div>
            <hr></hr>
                {
                  isBuyer && (<li><Link to='/dashboard'><FaBorderStyle></FaBorderStyle> My Orders</Link></li>
                  )}
                {
                  isAdmin && <li><Link to='/dashboard/allUser'><FiUsers></FiUsers> All Users</Link></li>}
                {
                  isSeller && (<>
                    <li className=''><Link to='/dashboard/addProduct'><HiPlusCircle></HiPlusCircle> Add Product</Link></li>
                    <li className=''><Link to='/dashboard/myProducts'><HiGift></HiGift> Products</Link></li>
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

