import React, { useContext, useState } from 'react';
import { ShareContext } from '../../../ShareProvider/ShareProvider';

const BannerOneButton = () => {
    const {colors}=useContext(ShareContext);
    const [isHovering, setIsHovering] = useState(false);
 
    const handleMouseEnter = () => {
      setIsHovering(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovering(false);
    };
    return (
        <div>
       <button className="text-white border border-white hover:bg-[#0a8803] hover:text-white hover:border-[#0a8803] active:bg-[#0a8803] px-8 py-3 text-lg font-semibold outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" style={{transitionDuration: `1s`, backgroundColor: isHovering ? colors[0]?.color : '',  borderColor: isHovering ? colors[0]?.color : 'white',}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Book Now</button>

        </div>
    );
};

export default BannerOneButton;