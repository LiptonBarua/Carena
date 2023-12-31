import React, { useContext, useState } from 'react';
import { ShareContext } from '../../../ShareProvider/ShareProvider';
import SellButtonOne from './SellButtonOne';

const SellCar = () => {
    const {colors}=useContext(ShareContext);
    const [isHovering, setIsHovering] = useState(false);
 

    const handleMouseEnter = () => {
      setIsHovering(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovering(false);
    };


    return (
        <div style={{backgroundImage: `url(https://c4.wallpaperflare.com/wallpaper/956/868/1012/car-nissan-race-cars-road-wallpaper-preview.jpg)`, backgroundRepeat: `no-repeat`, backgroundSize: `cover`, backgroundPosition: `center`}}>
          <div className='bg-[#000000c2] bg-opacity-80'>
          <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='flex items-center px-4 md:px-8 pt-10'>
                <img src="https://i.ibb.co/Pw9Dkpk/close-up-portrait-nice-cute-adorable-smiling-charming-cheerful-girl-pointing-with-her-index-finger-1.png" alt="" />
                <div className='text-white ml-10'>
                    <h1 className='font-bold mb-3'>ARE YOU LOOKING FOR A CAR?</h1>
                    <p className='text-justify'>Search your car in our Inventory and request a quote on the vehicle of your choosing.</p>
                    
                    <SellButtonOne></SellButtonOne>
                </div>
            </div>
          <div className='flex px-4 md:px-8 pt-10 bg-[#0a8803]' style={{backgroundColor: colors[0]?.color}}>
                <div className='text-white my-auto'>
                    <h1 className='font-bold mb-3'>DO YOU WANT TO SELL YOUR CAR ?</h1>
                    <p className='text-justify'>The vehicle of your choosing search your car in our Inventory and request a quote on.</p>
                    <button className="text-[#0a8803] border border-[white] hover:bg-[black] hover:border-black hover:text-white  active:bg-[white] bg-[white] font-semibold text-sm mt-3 px-6 py-2 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" style={{color: isHovering ? 'white' : colors[0]?.color,}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Contact</button>

                </div>
                <img src="https://i.ibb.co/zHhHjL8/nissan-skyline-gt-r-r34-v-spec-ii-nissan-skyline-gt-r-r34-nissan-jdm-wallpaper-preview-removebg-prev.png" alt="" />

            </div>
       
          </div>
          </div>
        </div>
    );
};

export default SellCar;