import React, { useContext, useEffect, useState } from 'react';
import { HiOutlineMinus } from 'react-icons/hi';
import { ShareContext } from '../../../ShareProvider/ShareProvider';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Testimonials = ({testimonail}) => {
const {img, name, position, title}= testimonail;
    const {colors}=useContext(ShareContext);
    const [isHovering, setIsHovering] = useState(false);
 

    const handleMouseEnter = () => {
      setIsHovering(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovering(false);
    };


    useEffect(() => {
      AOS.init({
        // Configure AOS options here (see documentation for available options)
        duration: 800, // Animation duration in milliseconds
        offset: 200, // Offset (in pixels) from the top/bottom of the viewport to trigger animations
        easing: 'ease-in-out', // Easing function for animations
        // Add more options as needed
      });
    }, []);
    
    return (
       
            <div data-aos="fade-left" className="hover:bg-[#0a8803]  hover:text-white bg-white text-black px-10 mt-16 md:mt-0 w-full shadow-lg" style={{transition: `2s`, backgroundColor: isHovering ? colors[0]?.color : 'white',  color: isHovering ? 'white' : 'black',}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>

<img alt="Kyle-katarn" src={img} className="h-20 w-20 -mt-10" />
<div className="mt-6 pb-5">

    <div className='flex items-center'>
    <h1 className=" text-lg"><HiOutlineMinus></HiOutlineMinus></h1>
        <p className="font-semibold">{name}</p>
    </div>
    <p>{position}</p>
    <p className="mt-4 text-sm text-justify">
       {title}
    </p>
</div>

</div>
       
    );
};

export default Testimonials;