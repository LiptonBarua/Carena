import React, { useContext, useState } from 'react';
import { ShareContext } from '../../../ShareProvider/ShareProvider';

const AboutUsOneButton = () => {
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
          <button className="bg-black hover:bg-[#0a8803] text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" style={{backgroundColor: isHovering ? colors[0]?.color : 'black',  border: isHovering ? colors[0]?.color : 'black',}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Our Partners</button>

        </div>
    );
};

export default AboutUsOneButton;