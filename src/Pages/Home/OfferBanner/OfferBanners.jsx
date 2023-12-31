import React, { useContext, useEffect, useState } from 'react';
import { ShareContext } from '../../../ShareProvider/ShareProvider';
import Aos from 'aos';
import 'aos/dist/aos.css';

const OfferBanners = ({offer}) => {
    const{name, title, data, icon, bIcon}=offer;

    const{colors}=useContext(ShareContext)
	const [isHovering, setIsHovering] = useState(false);
 

    const handleMouseEnter = () => {
      setIsHovering(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovering(false);
    };


    useEffect(() => {
      Aos.init({
        duration: 800,
        offset: 200, 
        easing: 'ease-in-out',
      });
    }, []);

    return (
        <div data-aos="fade-right" className="flex flex-col items-center py-16 px-8 bg-[#eae5e5] hover:bg-[#0a8803] hover:text-white"  style={{transition: `1s`, backgroundColor: isHovering ? colors[0]?.color : '',  border: isHovering ? 'black' : colors[0]?.color, color: isHovering? 'white' : 'black'}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
		<h1 className='text-6xl'>{icon}</h1>
			<h3 className="mt-5 text-xl font-semibold">{name}</h3>
			<h3 className="text-2xl font-semibold">{title}</h3>
			<div className="mt-6 leading-tight">
				<p className='text-justify'>{data}</p>
			</div>
			<h1 className=" text-3xl">{bIcon}</h1>
		</div>
    );
};

export default OfferBanners;