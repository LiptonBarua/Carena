
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { ShareContext } from '../../../ShareProvider/ShareProvider';
import { useContext, useState } from 'react';
import { HiMenu } from "react-icons/hi";


const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [navbar, setNavbar] = useState(true);
  const [dropDown, setDropDown] = useState(false);
  const{profile, colors}=useContext(ShareContext);

  const handleLogOut = () => {

    logOut()
      .then(() => { })
      .catch(() => { })

  }

  const dropDownItems=<>
      <li onClick={()=>setNavbar(!navbar)}><Link to='/myProfile'>My Profile</Link></li>
      <button onClick={()=>{handleLogOut(); setNavbar(!navbar)}} className='bg-[#0a8803] px-6 py-3 uppercase text-white font-semibold' style={{backgroundColor: colors[0]?.color}}>Log Out</button>
  </>
  const manuItem = <>
    <li onClick={()=>setNavbar(!navbar)}><Link to='/'>Home</Link></li>
    <li onClick={()=>setNavbar(!navbar)}><Link to='/blog'>Blog</Link></li>
    {
      user?.uid ?
        <>
       <li onClick={()=>setNavbar(!navbar)}><Link to='/dashboard'>Dashboard</Link></li>
<div className="grid items-center justify-center justify-items-center relative">
            {profile[0]?.image ? (
              <>
                <img
                  onClick={() => setDropDown(!dropDown)}
                  className="w-8 h-8 rounded-full items-center justify-center"
                  src={profile[0]?.image}
                  alt="user"
                />
              </>
            ) : (
              <>
                {user?.photoURL ? (
                  <img
                    onClick={() => setDropDown(!dropDown)}
                    className="w-10 h-10 rounded-full items-center justify-center"
                    src={user?.photoURL}
                    alt="user"
                  />
                ) : (
                  <img
                  onClick={() => setDropDown(!dropDown)}
                  className="w-8 h-8 rounded-full items-center justify-center"
                  src='https://creazilla-store.fra1.digitaloceanspaces.com/icons/7913955/business-man-icon-md.png'
                  alt="user"
                />
                )}
              </>
            )}

            {dropDown && (
              <ul
                className="lg:absolute  lg:top-[50px]  lg:-right-12 menu ul bg-white  lg:backdrop-filter  lg:shadow-md items-center justify-center lg:z-50 lg:w-52 lg:py-2 lg:px-5" 
                onClick={() => {
                  setDropDown(!dropDown);
                  setNavbar(!navbar);
                }}>
                {dropDownItems}
              </ul>
            )}
          </div>

        </>
        :
        <li className='lg:py-2 lg:px-6 lg:bg-[#0a8803] lg:text-white' onClick={()=>setNavbar(!navbar)}><Link to='/login' >Login</Link></li>
    }

  </>
  return (
    <nav className="fixed bg-white dark:bg-dark py-5 backdrop-filter backdrop-blur-xl shadow-md  z-50 w-full md:px-5 right-0 top-0">
			<div className="justify-between px-4 mx-auto lg:items-center lg:flex">
				<div>
					<div className="flex items-center justify-between  lg:block">
         <div className='flex'>
         <label  htmlFor="my-drawer-2" tabIndex={2} className="text-black lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
						<Link to="/">
							<h2 className="relative text-2xl font-bold flex items-center">
              <img src='https://i.ibb.co/MV0Sz02/logo-removebg-preview-1.png' alt="" className='w-10 md:w-14 z-10' />
             <div className='absolute mb-2 ml-[32px] md:ml-[43px]'>
             <span className='text-2xl md:text-3xl text-[#0a8803]' style={{color: colors[0]?.color}}>CarTrek</span>
             
             </div>
							</h2>
						</Link>
         </div>
						<div className="lg:hidden flex items-center gap-1 justify-center">
							<button
								className="p-2 rounded-md outline-none"
								onClick={() => setNavbar(!navbar)}>
								{navbar ? (
									<HiMenu className="w-8 h-8 text-2xl text-[#0a8803]" style={{color: colors[0]?.color}}></HiMenu>
								) : (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-8 h-8 text-2xl text-[#0a8803]" style={{color: colors[0]?.color}}
										viewBox="0 0 20 20"
										fill="currentColor">
										<path
											fillRule="evenodd"
											d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
											clipRule="evenodd"
										/>
									</svg>
								)}
							</button>
						
						</div>
					</div>
				</div>
				<div className="flex items-center dark:text-white gap-4">
					<div

						className={`text-center flex-1 justify-self-center items-center pb-3 mt-10 lg:block md:pb-0 md:mt-0 cursor-pointer ${navbar ? "hidden" : "block"
							}`}>
						<ul className="items-center justify-center font-semibold ul  space-y-5 lg:flex lg:space-x-6 lg:space-y-0  dark:text-white">
							{manuItem}
						</ul>
					</div>
					
				</div>
			</div>
		</nav>
  );
};

export default Header;