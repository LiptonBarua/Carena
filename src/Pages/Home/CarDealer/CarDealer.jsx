import React, { useContext } from 'react';
import { ShareContext } from '../../../ShareProvider/ShareProvider';




const CarDealer = () => {
 const{colors}=useContext(ShareContext);
 
    return (
        <div className='py-24 bg-[#F7F7F7]'>
            <div className='text-center'>
            <div className='mb-20'>
            <p className='text-[#0a8803] font-bold' style={{color: colors[0]?.color}}>Top Rated Dealer</p>
            <h1 className='font-bold text-2xl md:text-3xl text-black'>Best Customer Experience</h1>
            </div>
            <div className='px-4 md:px-0 lg:flex lg:justify-center'>
                <img src="https://i.ibb.co/V2YPZ8m/Capture.png" alt="" />
            </div>
            </div>
          
        </div>

    );
};

export default CarDealer;