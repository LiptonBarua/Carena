import React, { useContext, useState } from 'react';
import { FiCircle } from "react-icons/fi";
import { ShareContext } from '../../../ShareProvider/ShareProvider';

const SmallBanner = () => {
    const{colors}=useContext(ShareContext);


    return (
        <div className='hidden lg:block relative my-52 mb-5' style={{backgroundImage: `url(https://i.ibb.co/T4ypGV8/Black-White-Modern-Car-Wash-Detailing-Twitter-Header.png)`, backgroundRepeat: `no-repeat`, backgroundSize: `cover`, backgroundPosition: `center`}}>
          <div className='absolute  ml-[42%] z-40'>
          <img className=' mt-14 w-[80%]' src="https://i.ibb.co/Mnk5mmx/pexels-mike-bird-100650-removebg-preview.png" alt="" />
          <div className='text-white flex justify-end'>
          <div className='-mt-14'>
          <button className="text-[black] rounded-full border border-[white] hover:bg-[black] hover:border-black hover:text-white text-sm bg-[white] font-semibold mt-3 px-6 py-2 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"  >ORDER NOW</button>
          <h1 className=''>abc@gmail.com</h1>
          <h1 className=''>www.cartrek.com</h1>
          </div>
          </div>
          </div>

      <div className='relative h-96 flex'>
      <div className='w-96 h-full'>
  
  </div>
  <div className='w-2/3 absolute right-0 h-full bg-[#0a8803]' style={{clipPath: `polygon(74% 0, 100% 0%, 100% 100%, 0 100%)`, backgroundColor: colors[0]?.color}}>
 

  </div>
      </div>
      </div>
    );
};

export default SmallBanner;