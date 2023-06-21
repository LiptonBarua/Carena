import React from 'react';

const Banner = () => {
    return (
        <div className='' style={{ backgroundImage: `url(https://raw.githubusercontent.com/LiptonBarua/Car-Sale/main/src/Assets/2021-Best-Smartphones-3-840x472.jpg.webp)`, backgroundSize: `cover`, backgroundRepeat: `no-repeat` }}>
            <section className="pt-14 bg-[black] bg-opacity-90" >
                <div className="flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="text-white flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-3xl font-bold leading-none sm:text-5xl">Second Hand Mobiles For Sale !!!</h1>
                        <p className="md:text-justify mt-6 mb-8 text-lg sm:mb-12">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <button className="text-[white] border border-[#0a8803] hover:bg-[black] hover:border-white  active:bg-[#0a8803] bg-[#0a8803] font-semibold text-lg px-8 py-3 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Starting</button>
                            <button className="text-white border border-white hover:bg-[#0a8803] hover:text-white hover:border-[#0a8803] active:bg-[#0a8803] px-8 py-3 text-lg font-semibold outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Book Now</button>
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src='https://github.com/LiptonBarua/Car-Sale/blob/main/src/Assets/950192_720-removebg-preview.png?raw=true' alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;