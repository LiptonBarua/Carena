import React, { useContext, useState } from 'react';
import {HiOutlineFilm,  HiOutlineMinus, HiOutlineNewspaper} from "react-icons/hi";
import {MdEmojiTransportation} from "react-icons/md";
import {GiDrill} from "react-icons/gi";
import { ShareContext } from '../../../ShareProvider/ShareProvider';
import OfferBanners from './OfferBanners';

const OfferBanner = () => {

	const{colors}=useContext(ShareContext)
	const [isHovering, setIsHovering] = useState(false);
 

    const handleMouseEnter = () => {
      setIsHovering(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovering(false);
    };


const offerData=[
	{
		id: '1',
		icon: <HiOutlineFilm></HiOutlineFilm>,
		name: 'The Wheel',
		title: 'Balancing',
		data: 'MotorLand is nisi aliquip ex con velit esse cillum dolore fugiatal excepteur sint occaecat.',
		bIcon: <HiOutlineMinus></HiOutlineMinus>
	},
	{
		id: '2',
		icon: <MdEmojiTransportation></MdEmojiTransportation>,
		name: 'Transmission',
		title: 'Installation',
		data: 'MotorLand is nisi aliquip ex con velit esse cillum dolore fugiatal excepteur sint occaecat.',
		bIcon: <HiOutlineMinus></HiOutlineMinus>
	},
	{
		id: '3',
		icon: <GiDrill></GiDrill>,
		name: 'CarZone',
		title: 'Painting',
		data: 'MotorLand is nisi aliquip ex con velit esse cillum dolore fugiatal excepteur sint occaecat.',
		bIcon: <HiOutlineMinus></HiOutlineMinus>
	},
	{
		id: '4',
		name: 'CarZone',
		icon: <HiOutlineNewspaper></HiOutlineNewspaper>,
		title: 'Inspection',
		data: 'MotorLand is nisi aliquip ex con velit esse cillum dolore fugiatal excepteur sint occaecat.',
		bIcon: <HiOutlineMinus></HiOutlineMinus>
	},
]

    return (
        <section className="mb-16" style={{ backgroundImage: `url(https://4.bp.blogspot.com/-QAAtUt2yuSc/XGkB_h3K3MI/AAAAAAAA6GE/L2ztZEZKuQQ7joQ2Mi9pqZh3f-y0paFQwCLcBGAs/s1600/2019_nissan_terra_fiery_red.jpg)`, backgroundSize: `cover`, backgroundRepeat: `no-repeat` }}>
      <div className="flex bg-[#000000c2] bg-opacity-80 flex-col justify-center px-4 py-6 md:px-16 lg:px-0 lg:mx-auto sm:py-12 lg:py-32 lg:flex-row lg:justify-between">
      <section className="lg:max-w-[85%] lg:mx-auto">
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
	<div className=" lg:-mb-48 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
{
	offerData?.map(offer=><OfferBanners key={offer.id} offer={offer}></OfferBanners>)
}

	</div>
</section>
      </div>
    </section>
    );
};

export default OfferBanner;