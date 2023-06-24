import React from 'react';

const CarSales = () => {
    return (
        <section className="bg-[#eeeaea] mt-24">
            <div className="py-24 px-4 md:max-w-[85%] mx-auto container flex flex-col mx-auto lg:flex-row">
                <div className="w-full h-[320px] md:h-[450px] lg:w-[500px]" style={{ backgroundImage: `url(https://cdn.thezebra.com/zfront/media/production/images/man-talking-on-phone-smart-car-screen.format-jpeg.jpg)`, backgroundPosition: `center`, backgroundSize: `cover` }}></div>
                <div className="flex flex-col w-full lg:w-2/3 lg:px-12 pt-5 lg:pt-0 text-[#131313]">
                    <h1 className='text-xl font-semibold'>We are Trusted Name in Car Sales & Services</h1>
                    <h2 className="text-2xl leading-none">Used by Million of People Every Month!</h2>
                    <p className="mt-4 mb-8 text-sm text-justify">MotorLand is aliquip exd ea consequat duis lorem ipsum dolor sit amet consectetur dipis icing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation. Slamco laboris nisi ut aliquip ex ea comdo cons equat uis aute irure dolor easprehen derit.</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:gap-2'>
                        <div>
                            <li>Best Prices</li>
                            <li>Test Drive Services</li>
                            <li>Car Drop Facility</li>
                            <li>pecial Finance Facility</li>
                        </div>
                        <div>
                            <li>National Coverage</li>
                            <li>No Booking Fee</li>
                            <li>Frequent Inspections</li>
                            <li>Well Maintained Vehicles</li>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CarSales;