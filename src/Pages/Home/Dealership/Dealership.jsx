import React from 'react';
import { HiOutlineMinus } from 'react-icons/hi';

const Dealership = () => {
    return (
        <div className='px-4 md:max-w-[85%] mx-auto pb-20'>
      <div className='-mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
	  <div className=" bg-[white] hover:bg-[#e0dbdb] p-12 shadow-lg">
		<img className='w-14 h-14' src="https://i.ibb.co/sg3ySMy/deal.png" alt="" />
			<h3 className="my-3 text-xl font-semibold ">Largest Dealership of Cars</h3>
			<p className='text-justify'>MotorLand is nisi aliquip ex consequat duis velit esse cillum dolore fugiat nulla pariatur excepteur sint occaecat.</p>
			<h1 className=" text-4xl text-[#d01818]"><HiOutlineMinus></HiOutlineMinus></h1>
		</div>
		<div className=" bg-[white] hover:bg-[#e0dbdb] p-12 shadow-lg">
		<img className='w-14 h-14' src="https://i.ibb.co/rxckc8D/price.png" alt="" />
			<h3 className="my-3 text-xl font-semibold ">We Offers Lower Cars Prices</h3>
			<p className='text-justify'>MotorLand is nisi aliquip ex consequat duis velit esse cillum dolore fugiat nulla pariatur excepteur sint occaecat.</p>
			<h1 className=" text-4xl text-[#d01818]"><HiOutlineMinus></HiOutlineMinus></h1>
		</div>
		<div className=" bg-[white] hover:bg-[#e0dbdb] p-12 shadow-lg">
		<img className='w-14 h-14' src="https://i.ibb.co/r7J3Yx0/customer-support.png" alt="" />
			<h3 className="my-3 text-xl font-semibold ">Multipoint Safety Checks</h3>
			<p className='text-justify'>MotorLand is nisi aliquip ex consequat duis velit esse cillum dolore fugiat nulla pariatur excepteur sint occaecat.</p>
			<h1 className=" text-4xl text-[#d01818]"><HiOutlineMinus></HiOutlineMinus></h1>
		</div>
	  </div>
        </div>
    );
};

export default Dealership;