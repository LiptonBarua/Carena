import React, { useContext, useEffect, useState } from 'react';
import { MdOutlineBusinessCenter } from "react-icons/md";
import { FaRegHandshake, FaCarSide } from "react-icons/fa";
import { ShareContext } from '../../../ShareProvider/ShareProvider';
import AboutUsOneButton from './AboutUsOneButton';
import Aos from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
	const {colors}=useContext(ShareContext);


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
		<div className='py-20 lg:max-w-[90%] lg:mx-auto'>
			<section className="dark:bg-gray-800 dark:text-gray-100">
				<div className="px-4 md:px-16 py-12 space-y-24 lg:px-8 lg:max-w-7xl">

					<div className="grid lg:gap-8 grid-cols-1 lg:grid-cols-2 ">
						<div>
							<h3 className="text-2xl md:text-3xl lg:text-5xl mb-16 md:mb-24">About MotorLand</h3>
							<div className="flex flex-col justify-center flex-1 dark:bg-gray-900">
								<span className="text-lg font-semibold dark:text-gray-400">We are a Trusted Name in Auto Industry</span>
								<h3 className="text-2xl">Visited by Million of Car Buyers Every Month!</h3>
								<p className="my-6 text-justify">MotorLand is aliquip exd ea consequat duis lorem ipsum dolor sit amet consectetur dipis icing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation. Slamco laboris nisi ut aliquip ex ea comdo consequat uis aute irure dolor raeprehenderit voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

								<div className='flex'>
									<AboutUsOneButton></AboutUsOneButton>
									<button className="bg-[#0a8803] hover:bg-black text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" style={{backgroundColor: isHovering ? 'black' : colors[0]?.color,  border: isHovering ? 'black' : colors[0]?.color,}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>learn more</button>

								</div>

							</div>
						</div>
						<div aria-hidden="true" className="mt-10 lg:mt-0">
							<div className='flex'>
								<div data-aos="fade-right" className='hidden lg:block'>
									
									<img className='w-[650px] h-[700px] -mt-20' src="https://i.ibb.co/jMsygHW/civic-hatchback-removebg-preview.png" alt="" />
								</div>
								<div>
									<div className="flex items-center space-x-2 sm:space-x-4 mb-10">
										<MdOutlineBusinessCenter className='text-8xl'></MdOutlineBusinessCenter>
										<div className="space-y-2">
											<p className="text-lg font-medium leading-snug">10 Years in Business</p>
											<p className="leading-snug">MotorLand is nisi aliquip ea consequat duis velit esse cillum dolore fugiat nulla pariatur excepteur sint occaecat.</p>
										</div>
									</div>
									<div className="flex items-center space-x-2 sm:space-x-4 mb-10">
										<FaRegHandshake className='text-8xl'></FaRegHandshake>
										<div className="space-y-2">
											<p className="text-lg font-medium leading-snug">10 Years in Business</p>
											<p className="leading-snug">MotorLand is nisi aliquip ea consequat duis velit esse cillum dolore fugiat nulla pariatur excepteur sint occaecat.</p>
										</div>
									</div>
									<div className="flex items-center space-x-2 sm:space-x-4 mb-5">
										<FaCarSide className='text-8xl'></FaCarSide>
										<div className="space-y-2">
											<p className="text-lg font-medium leading-snug">10 Years in Business</p>
											<p className="leading-snug">MotorLand is nisi aliquip ea consequat duis velit esse cillum dolore fugiat nulla pariatur excepteur sint occaecat.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
			</section>
		</div>
	);
};

export default AboutUs;