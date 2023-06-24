import React, { useContext, useState } from 'react';
import {HiOutlineFilm, HiOutlineMinus, HiOutlineNewspaper} from "react-icons/hi";
import {MdEmojiTransportation} from "react-icons/md";
import {GiDrill} from "react-icons/gi";
import { ShareContext } from '../../../ShareProvider/ShareProvider';

const OfferBanner = () => {

	const{colors}=useContext(ShareContext)
	const [isHovering, setIsHovering] = useState(false);
 

    const handleMouseEnter = () => {
      setIsHovering(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    return (
        <section className="mb-16" style={{ backgroundImage: `url(https://4.bp.blogspot.com/-QAAtUt2yuSc/XGkB_h3K3MI/AAAAAAAA6GE/L2ztZEZKuQQ7joQ2Mi9pqZh3f-y0paFQwCLcBGAs/s1600/2019_nissan_terra_fiery_red.jpg)`, backgroundSize: `cover`, backgroundRepeat: `no-repeat` }}>
      <div className="flex bg-[#000000c2] bg-opacity-80 flex-col justify-center p-6 mx-auto sm:py-12 lg:py-32 lg:flex-row lg:justify-between">
      <section className="md:max-w-[85%] mx-auto">
	<div className="text-center text-white">
		<h2 className="text-3xl lg:text-5xl">What We Offer</h2>
		<p className="dark:text-gray-400">Tempor incididunt labore dolore duis lorem magna aliqua sed ipsum.</p>
	
	</div>

<div className='flex justify-center mt-4 mb-14'>
<div>
<hr className='w-10 mx-auto'></hr>
	<div className='flex mt-2'>
	<hr className='w-9'></hr>
	<h1 className='mx-1'></h1>
	<hr className='w-9'></hr>
	</div>
</div>
</div>
	<div className="container lg:-mb-48 mx-auto grid justify-center gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
		<div className="flex flex-col items-center py-16 px-8 bg-[#eae5e5] hover:bg-[#0a8803] hover:text-white"  style={{transition: `1s`, backgroundColor: isHovering ? colors[0]?.color : '',  border: isHovering ? 'black' : colors[0]?.color, color: isHovering? 'white' : 'black'}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
		<h1 className='text-6xl'><HiOutlineFilm></HiOutlineFilm></h1>
			<h3 className="mt-5 text-xl font-semibold">The Wheel</h3>
			<h3 className="text-2xl font-semibold">Balancing</h3>
			<div className="mt-6 leading-tight">
				<p className='text-justify'>MotorLand is nisi aliquip ex con velit esse cillum dolore fugiatal excepteur sint occaecat.</p>
			</div>
			<h1 className=" text-3xl"><HiOutlineMinus></HiOutlineMinus></h1>
		</div>
        <div className="flex flex-col items-center py-16 px-8 bg-[#eae5e5] hover:bg-[#0a8803] hover:bg-[#0a8803] hover:text-white" style={{transition: `1s`, backgroundColor: isHovering ? colors[0]?.color : '',  border: isHovering ? 'black' : colors[0]?.color, color: isHovering? 'white' : 'black'}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
		<h1 className='text-6xl'><MdEmojiTransportation></MdEmojiTransportation></h1>
			<h3 className="mt-5 text-xl font-semibold">Transmission</h3>
			<h3 className="text-2xl font-semibold">Installation</h3>
			<div className="mt-6 leading-tight">
				<p className='text-justify'>MotorLand is nisi aliquip ex con velit esse cillum dolore fugiatal excepteur sint occaecat.</p>
			</div>
			<h1 className=" text-3xl"><HiOutlineMinus></HiOutlineMinus></h1>
		</div>
        <div className="flex flex-col items-center py-16 px-8 bg-[#eae5e5] hover:bg-[#0a8803] hover:text-white" style={{transition: `1s`, backgroundColor: isHovering ? colors[0]?.color : '',  border: isHovering ? 'black' : colors[0]?.color, color: isHovering? 'white' : 'black'}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
		<h1 className='text-6xl'><GiDrill></GiDrill></h1>
			<h3 className="mt-5 text-xl font-semibold">CarZone</h3>
			<h3 className="text-2xl font-semibold">Painting</h3>
			<div className="mt-6 leading-tight">
				<p className='text-justify'>MotorLand is nisi aliquip ex con velit esse cillum dolore fugiatal excepteur sint occaecat.</p>
			</div>
			<h1 className=" text-3xl"><HiOutlineMinus></HiOutlineMinus></h1>
		</div>
		<div className="flex flex-col items-center py-16 px-8 bg-[#eae5e5] hover:bg-[#0a8803] hover:text-white" style={{transition: `1s`, backgroundColor: isHovering ? colors[0]?.color : '',  border: isHovering ? 'black' : colors[0]?.color, color: isHovering? 'white' : 'black'}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
		<h1 className='text-6xl'><HiOutlineNewspaper></HiOutlineNewspaper></h1>
			<h3 className="mt-5 text-xl font-semibold">CarZone</h3>
			<h3 className="text-2xl font-semibold">Inspection</h3>
			<div className="mt-6 leading-tight">
				<p className='text-justify'>MotorLand is nisi aliquip ex con velit esse cillum dolore fugiatal excepteur sint occaecat.</p>
			</div>
			<h1 className=" text-3xl"><HiOutlineMinus></HiOutlineMinus></h1>
		</div>

	
	</div>
</section>
      </div>
    </section>
    );
};

export default OfferBanner;