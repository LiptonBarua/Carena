import React, { useContext } from 'react';
import { FiCircle } from "react-icons/fi";
import { ShareContext } from '../../../ShareProvider/ShareProvider';

const SmallBanner = () => {
    const{colors}=useContext(ShareContext)

    return (
        <div className='hidden mt-52 h-72 w-full lg:flex' style={{backgroundImage: `url(https://i.ibb.co/qdLt0Ms/Black-White-Orange-Modern-Car-Sale-Billboard-Web-Ad.png)`, backgroundRepeat: `no-repeat`, backgroundPosition: `center`, backgroundSize: `cover`}}>
            {/* <img className='w-full h-full' src="https://i.ibb.co/qdLt0Ms/Black-White-Orange-Modern-Car-Sale-Billboard-Web-Ad.png" alt="" /> */}
<div className=''>
<div className='flex font-bold text-[#0a8803] pl-8 mt-3' style={{color: colors[0]?.color}}>
    <FiCircle className='mx-2'></FiCircle>
    <FiCircle></FiCircle>
    <FiCircle className='mx-2'></FiCircle>
    <FiCircle></FiCircle>
</div>
          <div className='mt-10'>
          <div className='pl-8 text-[#0a8803]' style={{color: colors[0]?.color}}>
           <h1 className='text-6xl font-bold uppercase'>car resale</h1>
           <div className='flex items-center'>
           <p className='uppercase text-white'>price starting from:</p>
           <button className=" px-4 m-2 text-sm font-bold transition-colors duration-150 bg-white text-black rounded-lg">$520000</button>
            </div>
           </div>
           <button className="h-10 px-7 transition-colors text-white bg-[#0a8803]" style={{backgroundColor: colors[0]?.color}}>BOOK NOW</button>
           <div className='pl-8 mt-2 flex justify-between text-[#0a8803]' style={{color: colors[0]?.color}}>
            <small>01538278521</small>
            <small>lliptonbarua274@gmail.com</small>
           </div>
          </div>
</div>
        </div>
    );
};

export default SmallBanner;