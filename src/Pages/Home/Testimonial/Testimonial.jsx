import React from 'react';

const Testimonial = () => {
    const testimonails = [
        {
            img: 'https://cdn.pixabay.com/photo/2020/09/18/22/05/man-5583035_1280.jpg',
            name: 'Nick William',
            position: ' Maintainer of Carbon PHP Library',
            title: 'PHPSandbox provides a great experience for our users to test the code right from the documentation. And for any new feature or bug report, we can share code and see the result immediately. For code demo with composer dependencies, its the best!'
        },
        {
            img: 'https://previews.123rf.com/images/fizkes/fizkes1907/fizkes190701066/127410740-confident-smiling-middle-aged-business-man-ceo-banker-coach-in-suit-looking-at-camera-male-company.jpg',
            position: ' Maintainer of Carbon PHP Library',
            name: 'James Liam',
            title: 'PHPSandbox provides a great experience for our users to test the code right from the documentation. And for any new feature or bug report, we can share code and see the result immediately. For code demo with composer dependencies, its the best!'
        },
    ]
    return (
        <section className="" style={{ backgroundImage: `url(https://c4.wallpaperflare.com/wallpaper/736/452/852/nissan-skyline-gt-r-nissan-nissan-gtr-nissan-gtr-r34-wallpaper-preview.jpg)`, backgroundSize: `cover`, backgroundRepeat: `no-repeat` }}>
            <div className="flex py-24 bg-[#000000c2] bg-opacity-80 flex-col p-6 mx-auto sm:py-12 lg:pt-32 lg:flex-row lg:justify-between">
                <section className="md:max-w-[85%] mx-auto">

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:-mb-28'>
                   {
                    testimonails?.map((testimonail, i)=> <div className="hover:bg-[#d01818] hover:text-white bg-white text-black px-10 mt-16 md:mt-0 w-full shadow-lg" style={{transition: `2s`}}>

                    <img alt="Kyle-katarn" src={testimonail?.img} className="h-24 w-24 -mt-10" />
                    <div className="mt-6 pb-5">

                        <div className='flex items-center'>
                            <hr className='w-3 mr-1'></hr>
                            <p className="font-semibold">{testimonail?.name}</p>
                        </div>
                        <p>{testimonail?.position}</p>
                        <p className="mt-4 text-sm text-justify">
                           {testimonail?.title}
                        </p>
                    </div>

                </div>)
                   }
                       
                    </div>
                </section>
            </div>
        </section>
    );
};

export default Testimonial;