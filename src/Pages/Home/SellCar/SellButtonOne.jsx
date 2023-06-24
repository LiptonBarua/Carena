import React, { useContext, useState } from 'react';
import { ShareContext } from '../../../ShareProvider/ShareProvider';

const SellButtonOne = () => {

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
          <button className="text-[white] border border-[#0a8803] hover:bg-[white] hover:border-white hover:text-black bg-[#0a8803] font-semibold text-sm mt-3 px-6 py-2 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"  style={{backgroundColor: isHovering ? 'white' : colors[0]?.color,  border: isHovering ? 'white' : colors[0]?.color,}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Search</button>

        </div>
    );
};

export default SellButtonOne;