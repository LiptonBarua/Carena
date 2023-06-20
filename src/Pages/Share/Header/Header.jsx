
import { Link } from 'react-router-dom';
import useAdmin from '../../../Hookes/useAdmin';
import useSaller from '../../../Hookes/useSaller';
import useBuyer from '../../../Hookes/useBuyer';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { HiMenu } from 'react-icons/hi';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSaller(user?.email);
  const [isBuyer] = useBuyer(user?.email);
  const [navbar, setNavbar] = useState(true);
  const [drop, setDrop] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(() => { })

  }
  const manuItem = <>
    <li onClick={()=>setNavbar(!navbar)}><Link to='/'>Home</Link></li>
    <li onClick={()=>setNavbar(!navbar)}><Link to='/blog'>Blog</Link></li>
    {
      user?.uid ?
        <>
       <li onClick={()=>setNavbar(!navbar)}><Link to='/dashboard'>Dashboard</Link></li>
            

          <button onClick={()=>{handleLogOut(); setNavbar(!navbar)}} className='bg-[#d01818] px-6 py-3 uppercase text-white font-semibold'>Log Out</button>
        </>
        :
        <li onClick={()=>setNavbar(!navbar)}><Link to='/login'>Login</Link></li>
    }

  </>
  return (
    <div className="navbar fixed top-0 py-5 z-50 md:px-12 bg-white">
      <div className="navbar-start">
         <label  htmlFor="my-drawer-2" tabIndex={2} className="text-black lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
        <Link to='/' className='font-bold text-xl md:text-3xl italic text-orange-500'>
          <img src='https://carena.bolvo.com/wp-content/uploads/2019/05/logo.jpg' alt="" className='w-28 lg:w-36' />
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
     <label onClick={() => setDrop(!drop)} tabIndex={0} className="text-black lg:hidden">
      <div onClick={()=>setNavbar(!navbar)}>
      {
                  navbar ? <HiMenu onClick={() => setDrop(!drop)} className="text-[#C60017] w-8 h-8 text-bold"></HiMenu> : <svg onClick={() => setDrop(!drop)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-bold text-[#340110]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>

                }
      </div>

          </label>
          {
            drop && (
              <ul onClick={()=>setDrop(!drop)} tabIndex={1} className="dropdown-content menu mt-5 -mr-5 lg:mr-0 lg:mt-0 p-2 shadow bg-white text-black w-52">
              {manuItem}
              </ul>
            )
          }

</div>


   
    </div>
  );
};

export default Header;