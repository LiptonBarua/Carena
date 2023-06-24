import React, { useContext } from 'react';
import { ShareContext } from '../../ShareProvider/ShareProvider';

import ProfileEdit from './ProfileEdit';
import ColorChange from './ColorChange';

const MyProfile = () => {
const{profile, colors} =useContext(ShareContext)



    
    return (
        <div className='py-24'>
            <div className="px-[20px] lg:px-0 h-auto lg:h-[550px] flex lg:justify-center">
                <div className="bg-white shadow-lg  lg:m-8 w-full lg:w-2/3 grid lg:flex lg:rounded-xl">
                    <div className="h-[450px] lg:h-auto lg:w-1/3 bg-[#0a8803] lg:rounded-l-lg" style={{backgroundColor: colors[0]?.color}}>
                        <div className="text-white lg:m-6 font-medium "></div>
                        <div className="flex items-center justify-center mt-6 lg:mt-0">
                            <div>
                                <img src={profile[0]?.image} alt="" className="border border-[black] w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
                                <h1 className='font-semibold text-2xl text-white'>{profile[0]?.firstName} {profile[0]?.lastName}</h1>
                            </div>
                        </div>
                        <hr className='mt-4'></hr>

                        <div className='mt-8 text-center'>
                            <div className="text-white ml-2 selection: text-md flex ">
                                <a href=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white mr-2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg></a>
                                <div>{profile[0]?.email}</div>
                            </div>
                            <div className="text-white ml-2 my-3 text-md flex ">
                                <a href=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white mr-2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 3.75L18 6m0 0l2.25 2.25M18 6l2.25-2.25M18 6l-2.25 2.25m1.5 13.5c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                                </svg>
                                </a>
                                <div>
                                    {profile[0]?.phone ? <h1>+{profile[0]?.phone}</h1> : <h1>Phone Number</h1>}
                                </div>
                            </div>

                            <div className="text-white ml-2 selection: text-md flex ">
                                <a href=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg></a>
                                <div>
                                    {profile[0]?.location ? <h1>{profile[0]?.location}</h1> : <h1>Phone Number</h1>}
                                </div>
                            </div>

                            
                         
                        </div>




                    </div>
                    <div className="lg:w-2/3 ">
          <ColorChange></ColorChange>

                      <ProfileEdit></ProfileEdit>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyProfile;