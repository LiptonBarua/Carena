
import { Link } from 'react-router-dom';
import useAdmin from '../../../Hookes/useAdmin';
import useSaller from '../../../Hookes/useSaller';
import useBuyer from '../../../Hookes/useBuyer';
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSaller(user?.email);
  const [isBuyer] = useBuyer(user?.email);

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(() => { })

  }
  const manuItem = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/blog'>Blog</Link></li>
    {
      user?.uid ?
        <>
       <li>
							<Link to={`${isSeller ? "/dashboard/addProduct":''}${isAdmin ? "/dashboard/allSeller":''}${isBuyer ? "/dashboard":''}`}>Dashboard</Link>
						</li>
        
          <li><button onClick={handleLogOut} className='bg-[#d01818] uppercase text-white font-semibold'>Log Out</button></li>
          
        </>
        :
        <li><Link to='/login'>Login</Link></li>
    }

  </>
  return (
    <div className="navbar fixed top-0 py-5 z-50 md:px-12 bg-white">
      <div className="navbar-start">
         <label htmlFor="my-drawer" tabIndex={2} className="text-black lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
        <Link to='/' className='font-bold text-xl md:text-3xl italic text-orange-500'>
          <img src='https://carena.bolvo.com/wp-content/uploads/2019/05/logo.jpg' alt="" className='w-20 lg:w-36' />
        </Link>
      </div>
     <div className='navbar-end'>
     <div className="hidden lg:flex">
        <ul className="menu menu-horizontal text-black p-0">
          {manuItem}
        </ul>
      </div>
     </div>
     <div className="dropdown dropdown-end">
     <label tabIndex={0} className="text-black lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
  <ul tabIndex={1} className="dropdown-content menu mt-5 -mr-5 lg:mr-0 lg:mt-0 p-2 shadow bg-white text-black w-52">
  {manuItem}
  </ul>
</div>


   
    </div>
  );
};

export default Navber;