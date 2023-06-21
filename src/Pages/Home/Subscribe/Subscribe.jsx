import React from 'react';

const Subscribe = () => {
    return (
        <div>
            <section className=" mb-36" style={{ backgroundImage: `url(https://c4.wallpaperflare.com/wallpaper/47/61/288/nissan-skyline-gt-r-r34-v-spec-ii-nissan-skyline-gt-r-r34-nissan-jdm-wallpaper-preview.jpg)`,backgroundPosition: `center`, backgroundSize: `cover`, backgroundRepeat: `no-repeat` }}>
                <div className="bg-[#000000c2] bg-opacity-80 py-8 px-4  lg:py-16 lg:px-6">



                    <div className=" flex items-center justify-center mt-4">
                        <div>
                            <div className='text-center'>
                                <p className='text-white'>Get the latest news from MotorLand</p>
                                <h2 className="mb-4 text-2xl tracking-tight font-semibold sm:text-4xl text-white">SUBSCRIBE TO OUR NEWSLETTER</h2>
                            </div>
                            <input className='md:ml-2 ml-0 md:w-96 py-4 px-8 ' placeholder="Email Address" type="email" name="" id="" />
                            {/* <input type="email" name="email" placeholder="Email Address" className="input md:w-80  dark:text-black" /> */}
                            <button className="text-white font-bold py-4 px-6 bg-[#0a8803]">Subscribe</button>

                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Subscribe;